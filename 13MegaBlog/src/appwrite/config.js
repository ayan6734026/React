import conf from "../conf/conf";
import {Client,Databases,Storage,ID,Query} from "appwrite"

export class Config{
    client=new Client();
    databases;
    bucket;//here We call bucket as Storage
    constructor(){
        this.client
        .setEndpoint(conf.appwriteUrl)
        .setProject(conf.appwriteProjectId);
        this.databases=new Databases(this.client)
        this.bucket=new Storage(this.client)
    }

    async createPost({title,slug,content,featuredImage,userId,status}){
        try {
            return await this.databases.createDocument(
            conf.appwriteDatabaseId,
            conf.appwriteCollectionId,
            slug,
            {
                title,
                content,
                featuredImage,
                userId,
                status
            }
        )
        } catch (error) {
            console.log("Appwrite serive :: createPost :: error",error)
            return false
        }
    }

    async updatePost(slug,{title,content,featuredImage,status}){
        try {
            return await this.databases.updateDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status
                }
            )
        } catch (error) {
            console.log("Appwrite serive :: updatePost :: error",error)
            return false
        }
    }

    async deletePost(slug){
        try {
            return await this.databases.deleteDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug
            )
        } catch (error) {
            console.log("Appwrite serive :: deletePost :: error",error)
            return false
        }
    }

    async getPost(slug){
        try {
            return await this.databases.getDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug
            )
            return true
        } catch (error) {
            console.log("Appwrite serive :: getPost :: error",error)
            return false
        }
    }

    async getAllPost(queries=[Query.equal("status","active")]){
        try {
            return await this.databases.listDocuments(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                queries
                // [ one or more query can be add here like this
                //     Query.equal("status","active") 
                // ]
            )
            return true
        } catch (error) {
            console.log("Appwrite serive :: getAllPost :: error",error)
            return false
        }
    }

    // Storage use
    async uploadFile(file){
        try {
            return await this.bucket.createFile(
                conf.appwriteBucketId,
                ID.unique(),
                file
            )
            return true
        } catch (error) {
            console.log("Appwrite serive :: uploadFile :: error",error)
            return false
        }
    }

    async deleteFile(fileId){
        try {
            return await this.bucket.deleteFile(
                conf.appwriteBucketId,
                fileId
            )
            return true
        } catch (error) {
            console.log("Appwrite serive :: deleteFile :: error",error)
            return false
        }
    }

    previewFile(fileId){
        return this.bucket.getFilePreview(
            conf.appwriteBucketId,
            fileId
        )
    }
}

const config=new Config()

export default config