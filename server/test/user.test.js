const User = require('../config/UserSchema');
const assert = require('assert');

describe("create user",()=>{
    it('should create new user',(done)=>{
        const singleUser = new User({
            name : "Tama",
            email : "tama@mail.com",
            password : "ama",
            address: "Kelapa Gading"

        });
        singleUser.save()
            .then(()=>{
                assert(!singleUser.isNew);
                done();
            });
    })
})
describe('Reading Test',()=>{
    let user;

    beforeEach((done)=>{
        user = new User({name : 'Joe'});
        user.save()
            .then(()=>{
                done();
            })
    })

    it('should read all data of Joe',(done)=>{
        User.find({name : 'Joe'})
            .then((users)=>{
                assert(users[0]._id.toString()===user._id.toString());
                done();
            })
    });

    it('read a particular id',(done)=>{
        User.findOne({_id : user._id})
            .then((user)=>{
                assert(user.name==='Joe');
                done();
            })
    })
});

describe('delete Test',()=>{

    let singleUser;
    beforeEach((done)=>{
        singleUser = new User({name : 'Joe'});
        singleUser.save()
            .then(()=>{
                done();
            })
    })

    it('should delete a user by model instance',(done)=>{
        singleUser.remove()
            .then(()=>User.findOne({name:'Joe'}))
            .then((users)=>{
                assert(users===null);
                done();
            })
    });

    it('should delete a user by its class instance',(done)=>{
        User.remove({name:'Joe'})
            .then(()=>User.findOne({name:'Joe'}))
            .then((users)=>{
                assert(users===null);
                done();
            })

    });

    it('should delete a user by class instance with find and remove',(done)=>{
        User.findOneAndRemove({name:'Joe'})
            .then(()=>User.findOne({name:'Joe'}))
            .then((users)=>{
                assert(users===null);
                done();
            })
    });

    it('should delete a user by its class instance and findbyidandRemove',(done)=>{
        User.findByIdAndRemove(singleUser._id)
            .then(()=>User.findOne({name:'Joe'}))
                .then((users)=>{
                    assert(users===null);
                    done();
                })
    })
})

describe('Update Test',()=>{

    let singleUser;
    beforeEach((done)=>{
        singleUser = new User({name : 'Joe'});
        singleUser.save()
            .then(()=>{
                done();
            })
    })

    function assertName(operation,done){
        operation
        .then(()=>User.find({}))
        .then((users)=>{
            assert(users.length===1);
            assert(users[0].name==='alex');
            done();
        })
    }

    it('should update data set and save method by model instance',(done)=>{
        singleUser.set('name','alex');
        assertName(singleUser.save(),done);    
    });

    it('should update data by update method - model instance',(done)=>{
        assertName(singleUser.update({name:'alex'}),done);

    })

    it('should find and update data by model class',(done)=>{
        assertName(
            User.update({name:'Joe'},{name:'alex'}),
            done
        )
    })

    it('should find a data and update by findOneAndUpdate by model class',(done)=>{
        assertName(
            User.findOneAndUpdate({name:'Joe'},{name:'alex'}),
            done
        )
    })

    it('should find a data by its id and update by model class',(done)=>{
        assertName(
            User.findByIdAndUpdate(singleUser._id,{name:'alex'}),
            done
        )
    })

})