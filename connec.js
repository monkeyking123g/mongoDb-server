const {MongoClient} = require('mongodb');

uri = "mongodb+srv://dima:1111@cluster0.itcupfx.mongodb.net/?retryWrites=true&w=majority"
const client = new MongoClient(uri);
async function main() {
	try {
        await client.connect();
        const database = client.db();
        const movies = database.collection("User");
    
        await movies.drop()
        console.log("drop succes")
     
    } catch (e) {
        console.error(e);
    }
    
    finally {
        await client.close();
    }

}
main()