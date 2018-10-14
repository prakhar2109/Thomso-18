var Media_User = require("../../../models/media/Media_User");
var Main_User = require('../../../models/main/Main_User');

exports.scanMediaQR = function(req, res) {
    if (req.body) {
        var updateData = {};
        if (req.body.name) {
            updateData.name = req.body.name;
        }
        if (req.body.email) {
            updateData.email = req.body.email.toLowerCase();
            updateData.email = updateData.email.trim();
        }
        if (req.body.contact) {
            updateData.contact = req.body.contact;
        }
        if (req.body.organization) {
            updateData.organization = req.body.organization;
        }
        if (req.body.qr) {
            updateData.qr = req.body.qr;
            updateData.qr = updateData.qr.trim();
        }
        var data = {
            img:req.body.image,
            format:req.body.format
        }
        if (updateData) {
            Media_User.findOne({qr: updateData.qr})
                .select('name email')
                .exec(function(err, user) {
                    if (err) {
                        return res.json({
                            success:false,
                            msg: 'Unable to connect to database. Please try again.',
                            error: err
                        });
                    }
                    if (!user) {
                        var baseImg = data.img.split(',')[1];
                        var binaryData = new Buffer(baseImg, 'base64');
                        var ext = data.format.split('/')[1];
                        updateData.image = `${updateData.qr}.${ext}`;
                        require("fs").writeFile(`./uploads/img/MediaImage/${updateData.image}`, binaryData, function(err) {
                            if(err) {
                                return res.json({ success: false, msg:"Image could not be saved", error: err});
                            } else {
                                var newUser = new Media_User(updateData);
                                newUser.save(function(err) {
                                    if (err) {
                                        return res.json({success: false, msg: 'Media Cannot Be Saved.', error: err});
                                    }
                                    return res.json({success: true, msg: 'Successfully Created New Media.'});
                                });
                            }
                        });
                    } else {
                        return res.json({success: false, msg: 'QR Already Exists', body: user});
                    }
                });
        } else {
            return res.json({success: false, msg: 'Invalid Data'});
        }
    } else {
        return res.json({success: false, msg: 'Invalid Data'});
    }
};

exports.getParticipant = function (req, res) {
    if (req.params.id) {
        Main_User.findOne({ thomso_id: req.params.id })
            .select('thomso_id name email college image')
            .exec(function (err, user) {
                if (err) {
                    return res.json({ success: false, msg: 'Something Went Wrong', error: err })
                }
                if (!user) {
                    return res.json({ success: false, msg: 'User not found' });
                }
                return res.json({ success: true, msg: 'User Found', body: user });
            });
    } else {
        return res.json({ success: false, msg: 'Invalid Params' });
    }
}

exports.scanParticipantQR = function(req, res) {
    if (req.body && req.body.thomso_id && req.body.qr) {
        var updateData = {};

        updateData.qr = req.body.qr;
        updateData.qr = updateData.qr.trim();

        req.body.thomso_id = req.body.thomso_id.trim();
        req.body.thomso_id = req.body.thomso_id.toUpperCase();

        Main_User.findOne({
            thomso_id:req.body.thomso_id
        })
            .select('verified blocked')
            .exec(function(err, user) {
                if (err) {
                    return res.json({ success: false, msg: "Something Went Wrong", error: err });
                }
                if (user) {
                    if (!user.verified) {
                        return res.json({ success: false, msg: "User Not Verified" });
                    }
                    if (user.blocked) {
                        return res.json({ success: false, msg: "Your Account Seems Suspecious" });
                    }
                    if (req.body.image && req.body.format) {
                        var data = {
                            id:user._id,
                            img:req.body.image,
                            format:req.body.format
                        };
                        var baseImg = data.img.split(',')[1];
                        var binaryData = new Buffer(baseImg, 'base64');
                        var ext = data.format.split('/')[1];
                        updateData.image = `${data.id}.${ext}`;
                        require("fs").writeFile(`./uploads/img/ProfileImage/${updateData.image}`, binaryData, function(err) {
                            if(err) {
                                return res.json({ success: false, msg:"Image could not be saved", error: err});
                            } else {
                                Main_User.update({
                                    thomso_id: req.body.thomso_id
                                }, updateData)
                                    .exec(function(err){
                                        if (err) {
                                            return res.json({ success: false, msg: "Failed to update data", error: err});
                                        }
                                        return res.json({ success: true, msg: "QR, Image Updated" });
                                    })
                            }
                        })
                    } else {
                        Main_User.update({
                            thomso_id: req.body.thomso_id
                        }, updateData)
                            .exec(function(err){
                                if (err) {
                                    return res.json({ success: false, msg: "Failed to update data" });
                                }
                                return res.json({ success: true, msg: "QR Updated, No Image" });
                            })
                    }
                } else {
                    return res.json({ success: false, msg: "User Not Found" });
                }
            });
    } else {
        return res.json({success: false, msg: 'Invalid Data'});
    }
};

exports.getPronite = function(req, res) {
    res.json({
        status: 200,
        success: true,
        data: {
            first :{
                day: 'Day 0',
                date: '25-10-2018',
                name: 'Coming Soon1',
                artist: 'Coming Soon1',
                description: 'Coming Soon1',
                venue: 'Coming Soon1',
                image: 'https://www.thomso.in/uploads/img/Pronite/coming_soon.png',
                time: 'Coming Soon1'
            },
            second :{
                day: 'Day 1 ',
                date: '26-10-2018',
                name: 'Coming Soon2',
                artist: 'Coming Soon2',
                description: 'Coming Soon2',
                venue: 'Coming Soon2',
                image: 'https://www.thomso.in/uploads/img/Pronite/coming_soon.png',
                time: 'Coming Soon2'
            },
            third :{
                day: 'Day 2 ',
                date: '27-10-2018',
                name: 'Coming Soon3',
                artist: 'Coming Soon3',
                description: 'Coming Soon3',
                venue: 'Coming Soon3',
                image: 'https://www.thomso.in/uploads/img/Pronite/coming_soon.png',
                time: 'Coming Soon3'
            },
            fourth :{
                day: 'Day 3 ',
                date: '28-10-2018',
                name: 'Coming Soon4',
                artist: 'Coming Soon4',
                description: 'Coming Soon4',
                venue: 'Coming Soon4',
                image: 'https://www.thomso.in/uploads/img/Pronite/coming_soon.png',
                time: 'Coming Soon4'
            }
        }
    })
}