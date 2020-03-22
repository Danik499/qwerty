import { MongoClient, ObjectID } from 'mongodb';
import reg from "./model";
import mongoose, { ConnectionStates } from "mongoose";

// const url = 'mongodb+srv://danik499:dakaskos283014@cluster0-fbn8h.mongodb.net/test';
// const dbName = 'taskDB';
// mongoose.connect(url, { useNewUrlParser: true });

const url = 'mongodb://localhost:27017';
const dbName = 'taskDB';
mongoose.connect(url + '/' + dbName);

const regControler = {
    get: function (request, response) {
        console.log("aaaaaaaaaabbbbbbbb")
        reg.find()
            .then(inf => {
                response.send(inf);
            })
            .catch(
                error => {
                    response.status(500).send(error);
                }
            );
    },

    post: function (request, response) {
        const newItem = new reg(request.body);
        let check = true;
        reg.find().then((inf) => {
            for (let i = 0; i < inf.length; i++) {
                if (newItem.login == inf[i].login) { check = false; break; }
            }

            if (!newItem.password) response.status(401).send("You did not enter a password!!!");
            if (!newItem.passwordAgain) response.status(401).send("Enter password again!!!");

            if (newItem.password != newItem.passwordAgain) {
                check = false;
                return response.status(401).send("Passwords do not match!!!");
            }
            if (check)
                newItem.save().then(user => {
                    console.log('hkvhjkv')
                    return response.send(user)
                })
            else return response.status(401).send("This login has already been taken!!!")
        });
    },

    logIn: function (request, response) {
        let user = new reg(request.body);
        reg.findOne({ login: user.login, password: user.password }).then(inf => {
            if (!inf) return response.status(401).send("Check your password or login!!!").status(304);
            if (inf.isLoggedIn) return response.status(401).send("This user is already logged in!!!");
            const updatedUser = { login: user.login, password: user.password, isLoggedIn: true };
            reg.findOneAndUpdate({ login: user.login, password: user.password }, updatedUser, { new: true }, function (error, user) {
                if (error) return response.send(error);
                else {
                    return response.send(user);
                }
            });
        });
    },

    logOut: function (request, response) {
        let user = new reg(request.body);
        reg.findOne({ login: user.login, password: user.password }).then(inf => {
            if (!inf) return response.status(401).send("Check your password or login!!!").status(401);
            if (!inf.isLoggedIn) {
                return response.status(401).send("This user is already logged out!!!");
            }
            const updatedUser = { login: user.login, password: user.password, isLoggedIn: false };
            reg.findOneAndUpdate({ login: user.login, password: user.password }, updatedUser, { new: true }, function (error, user) {
                if (error) return response.send(error);
                else {
                    return response.send(user);
                }
            });
        });
    },

    deleteById: function (req, res) {
        if (req.query.id) {
            reg.findByIdAndDelete(req.query.id).then((deleted) => {
                res.send(deleted);
            });
        }
    }
}

export default regControler;