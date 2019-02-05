const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

router.get('/', (req, res) => {
    // return all categories
    const queryText = `SELECT * FROM tags ORDER BY name`;
    pool.query(queryText)
        .then((result) => {
            res.send(result.rows);
        })
        .catch((error) => {
            console.log(`Error on query ${error}`);
            res.sendStatus(500);
        });
});

router.post('/',(req,res,) => {
    const newProject=req.body;
    const queryText = `INSERT INTO "projects" ("name", "description", "thumbnail",
                        "website", "github", "date_completed", "tag_id")
                        VALUES ($1, $2, $3, $4, $5, $6, $7)`
                pool.query(queryText,[newProject.name, newProject.description, newProject.thumbnail,
                            newProject.website, newProject.github, newProject.date_completed,
                                newProject.tag_id])
                .then((response)=>{
                    res.sendStatus(201);
                }).catch((error)=>{
                    console.log(`error in post ${error}`);
                    res.sendStatus(500)
                });
});

router.post('/', (req, res, ) => {
    const newProject = req.body;
    const queryText = `INSERT INTO "projects" ("name", "description", "thumbnail",
                        "website", "github", "date_completed", "tag_id")
                        VALUES ($1, $2, $3, $4, $5, $6, $7)`
    pool.query(queryText, [newProject.name, newProject.description, newProject.thumbnail,
    newProject.website, newProject.github, newProject.date_completed,
    newProject.tag_id])
        .then((response) => {
            res.sendStatus(201);
        }).catch((error) => {
            console.log(`error in post ${error}`);
            res.sendStatus(500)
        });
});

//wasn't working when I submitted the project- updated const id to req.params.id inside an array
router.delete('/:id', (req, res) =>{
           const id= [req.params.id];
    console.log('in delete router', id);
    
    const queryText = `DELETE FROM "projects"
                    WHERE id= $1`;
    pool.query(queryText, id)
    .then(() => { res.sendStatus(200); })
    .catch((error) => {
    console.log('error in delete project', error);
    res.sendStatus(500);
});

});


module.exports = router;