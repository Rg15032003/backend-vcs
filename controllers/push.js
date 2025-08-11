const fs=require("fs").promises;
const path=require("path");
const {s3,S3_BUCKET}=require("../config/aws-config");


async function pushRepo() {
    const repoPath=path.resolve(process.cwd(),".codePath");
    const commitsPath=path.join(repoPath,"commits");

    try  {
        const commitDirs=await fs.readdir(commitsPath);
        for(const commitDir of commitDirs) {
            const commitPath=path.join(commitsPath,commitDir);
            const files=await fs.readdir(commitPath);

            for(const file of files) {
                const filePath=path.join(commitPath,file);
                const fileContent=await fs.readFile(filePath);
                const params={
                    Bucket:S3_BUCKET,
                    Key:`commits/${commitDir}/${file}`,
                    Body:fileContent,
                };
                await s3.upload(params).promise();
            } 
        }
        console.log("Successfully uploaded to the s3");

    } catch (err) {
        console.log("Error pushing to S3 :",err)
    }
}

module.exports={pushRepo};