CodeHaven Backend is a lightweight version-control backend that lets developers manage code with Git-like commands (init, add, commit, push, pull) while using Amazon S3 as the remote storage.

With CodeHaven, you can:

🏗️ Initialize a local repo
📥 Add & commit changes
☁️ Push & pull code versions with S3
🔄 Keep local and remote codebases in sync
This makes CodeHaven ideal for developers who want cloud-backed versioning without setting up a full Git server.

✨ Features
🕒 Version Tracking – Maintain history of commits and retrieve past versions.
🔐 Secure Authentication – Protect API access with JWT tokens.
📡 RESTful APIs – Easy integration with CLI tools or frontend apps.
🛠️ Extensible – Can be extended to support additional cloud providers (Azure Blob, Google Cloud Storage).

🛠️ Tech Stack
Node.js (JavaScript), Express.js, MongoDB (commit metadata & repo info), Amazon S3 (code storage), JWT (authentication), AWS SDK (S3 integration).

📦 Installation & Setup
Follow these steps to set up CodeHaven Backend on your local machine:

1️⃣ Clone the repository
git clone https://github.com/yourusername/CodeHaven.git
cd CodeHaven

2️⃣ Install dependencies
npm install

3️⃣ Setup Amazon S3 Bucket
Log in to your AWS Management Console.
Navigate to S3 → Click Create bucket.
Enter a unique bucket name (e.g., codehaven-repo-storage).
Select a region (e.g., ap-south-1 or us-east-1).
Keep default settings or configure permissions as per your need.
Create an IAM User with programmatic access:
Attach policy → AmazonS3FullAccess (or restricted access for security).
Save the Access Key ID and Secret Access Key.

# Also change the bucket policy to =>
{
    "Version": "2012-10-17",
    "Statement": [
        {
            "Effect": "Allow",
            "Principal": {
                "AWS": "arn:aws:iam::your-arn"
            },
            "Action": "s3:*",
            "Resource": [
                "arn:aws:s3:::bucket_name",
                "arn:aws:s3:::bucket_name/*"
           ]
        }
    ]
}

# To connect the s3 bucket with your IDE run command 
=>aws-configure
after that enter the the access id and secret key.


3️⃣ Configure environment variables
Create a .env file in root of the project

PORT=
DB_URL=mongodb+srv://project_name:<password>@cluster0.h5qj1cg.mongodb.net/git?retryWrites=true&w=majority&appName=Your_cluster_name 
# setup the Mongo Atlas, create new project ,create cluster , get the uri.
JWT_SECRET_KEY=

4️⃣ Start the server
# Development mode
npm run dev
Server will run at:
👉 http://localhost:PORT_NUMBER

CodeHaven comes with a CLI interface that lets you run Git-like commands.
1️⃣ Start the server
node index.js start
Starts the backend server on the configured port.
<img width="1525" height="887" alt="Screenshot 2025-08-21 221345" src="https://github.com/user-attachments/assets/5d96a2e6-e353-4818-9d37-10186604cd89" />


2️⃣ Initialize a repository
node index.js init
Creates a .codehaven folder in your local project.
Links the project with the configured S3 bucket.
<img width="1918" height="1040" alt="Screenshot 2025-08-21 221539" src="https://github.com/user-attachments/assets/e02076da-5816-4727-97a9-8bf735100c87" />


3️⃣ Add files to staging
node index.js add <file-name>
Example:
node index.js add index.js
Stages the given file(s) for commit.
You can add multiple files by running the command multiple times.
<img width="1916" height="1034" alt="Screenshot 2025-08-21 221837" src="https://github.com/user-attachments/assets/5024074f-bb63-44c3-abbc-72128409008b" />


4️⃣ Commit changes
node index.js commit "<message>"
Example:
node index.js commit "Initial commit with basic setup"
Saves a snapshot of staged files with a commit message.
Commit metadata is stored in the backend database.
<img width="1919" height="1040" alt="Screenshot 2025-08-21 222011" src="https://github.com/user-attachments/assets/453cec52-bf60-49c6-aa97-e00fbfe97734" />


5️⃣ Push changes to S3
node index.js push
Uploads committed changes to the remote S3 bucket.
Keeps local and cloud repositories in sync.
<img width="1919" height="1042" alt="Screenshot 2025-08-21 222217" src="https://github.com/user-attachments/assets/0d578327-778b-4414-9b73-9f900ac8295d" />


6️⃣ Pull latest changes from S3
node index.js pull
Downloads all the commits from S3.
Merges it with your local repository.
<img width="1919" height="1038" alt="Screenshot 2025-08-21 222337" src="https://github.com/user-attachments/assets/9d4be930-7da1-49c7-9217-d2f1a6b8b308" />
