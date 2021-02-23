const MemberProfileController = require('../controllers/members.controller');


module.exports = (app) =>{
    app.get('/api/members', MemberProfileController.FindallMemberProfiles);
    app.get('/api/members/:id', MemberProfileController.FindOneMemberProfile);
    app.post('/api/members', MemberProfileController.CreateOneMemberProfile);
    app.put('/api/members/:id', MemberProfileController.UpdateExistingMember);
    app.delete('/api/members/:id', MemberProfileController.DeleteExistingMember);
    
}