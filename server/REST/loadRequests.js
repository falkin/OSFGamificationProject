define(['./tools/app','./routes/admin/level/levels'], function (app,adminLevels) {
    
	
	// ############################################# DEFINE RESQUESTS FOR ADMIN SIDE  #############################################
	
	// Levels call and manage
	app.post("/admin/:appid/level",adminLevels.addLevel);
	app.get('/admin/:appid/level/:id',adminLevels.selectLevel);
	app.put('/admin/:appid/level/:id',adminLevels.updateLevel);
	app.delete('/admin/:appid/level/:id',adminLevels.deleteLevel);
	app.get('/admin/:appid/levels',adminLevels.selectAllLevels);
	
	// ############################################# DEFINE RESQUESTS FOR CLIENT SIDE #############################################
		
	return app;
});