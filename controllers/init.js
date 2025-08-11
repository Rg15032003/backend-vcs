const fs=require("fs").promises; //create extra auto files
const path=require("path");

async function initRepo() {
    const repoPath=path.resolve(process.cwd(),".codePath"); //
    const commitsPath=path.join(repoPath,"commits"); //store commits data

    try {
        await fs.mkdir(repoPath,{recursive:true});
        await fs.mkdir(commitsPath,{recursive:true});
        await fs.writeFile(
            path.join(repoPath,"config.json"),
            JSON.stringify({bucket:process.env.S3_BUCKET})
        );
        console.log("Repository initialised!");
    }catch (err) {
        console.error("Error initialisng the repository",err);
    }
}

module.exports={initRepo};