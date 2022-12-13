const Logger = require('./logger');
const logger = new Logger();

//listener is ready here
logger.on('connection', function(args) {
    console.log('connection event is raised', args); //args.id, args.message can be used to get the values
});

logger.log('asxasxas');