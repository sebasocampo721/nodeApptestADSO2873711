// Enlazamos nuestro servicio
const Articleservice = require('../services/articleService');

const getAllArticles = async (req, res)=>{
    const allArticles = await Articleservice.getAllArticles();

    if(allArticles)
        res.status(200).send({ status:"OK", data: allArticles });
    else
        res.status(400).send({ status:"FAILED", data: allArticles });
};
const getArticle = async (req, res)=>{
    let id = req.params.articleId;
    try {
        const Article = await Articleservice.getArticle(id);
        res.status(200).send({ status:"OK", data: Article });
    } catch (error){
        res.status(error.status || 500).send({ status:"FAILED", data:{ error: error.message } });
    }
};

const createArticle = async (req, res) => {
  const { title, content, UserId, categoryIds } = req.body;

  const createdArticle = await Articleservice.createArticle(title, content, UserId, categoryIds);

  if (createdArticle)
    res.status(201).send({ status: "OK", data: createdArticle });
  else
    res.status(400).send({ status: "FAILED", data: createdArticle });
};


const updateArticle = async (req, res)=>{
    let id = req.params.articleId;
    let {title, content, UserId}= req.body;
    const updatedArticle = await Articleservice.updateArticle(id, title, content, UserId);
    if(updatedArticle)
        res.status(200).send({ status:"OK",data: updatedArticle });
    else
        res.status(400).send({ status:"FAILED", data:updatedArticle });
};

    const deleteArticle = async (req, res)=>{
    let id = req.params.articleId;
    const deletedArticle = await Articleservice.deleteArticle(id);
    if(deletedArticle)
        res.status(200).send({ status:"OK", data: deletedArticle });
    else
        res.status(400).send({ status:"FAILED", data: deletedArticle });
};  
module.exports ={
getAllArticles,
getArticle,
createArticle,
updateArticle,
deleteArticle,
};