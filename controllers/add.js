const fs=require("fs").promises;
const path=require("path");

async function addRepo(filePath) {
    const repoPath=path.resolve(process.cwd(),".codePath");
    const stagingpath=path.join(repoPath,"staging");

    try {
        await fs.mkdir(stagingpath, {recursive:true});
        const fileName=path.basename(filePath);
        await fs.copyFile(filePath,path.join(stagingpath,fileName));
        console.log(`File ${fileName} added to the staging area!`);
    } catch(err) {
        console.error("Error adding the file",err);
    }
  
}
module.exports={addRepo};