const createRepository =(req,res)=>{
    res.send("New Repository created");
};

const getAllRepositories =(req,res)=>{
    res.send("All Repositories fetched");
};

const fetchRepositoryById =(req,res)=>{
    res.send("Repository details fetched");
};

const fetchRepositoryByName =(req,res)=>{
    res.send("Repository details fetched");
};

const fetchRepositoriesForCurrentUser =(req,res)=>{
    res.send("Repository for logged in user fetched");
};

const updateRespositoryById =(req,res)=>{
    res.send("Repository updated");
};

const toggleVisibilityById =(req,res)=>{
    res.send("Visibility toggled");
};


const deleteRepositoryById =(req,res)=>{
    res.send("Repository deleted");
};

module.exports ={
    createRepository,
    getAllRepositories,
    fetchRepositoryById,
    fetchRepositoryByName,
    fetchRepositoriesForCurrentUser,
    updateRespositoryById,
    toggleVisibilityById,
    toggleVisibilityById,
    deleteRepositoryById
};