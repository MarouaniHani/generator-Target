const program = require('commander');
const SUB_GENERATORS = require('./commands'); 






/* Create commands */
Object.keys(SUB_GENERATORS).forEach(key => {
    const opts = SUB_GENERATORS[key];
    const command = program.command(`${key} ${getArgs(opts)}`, '', { isDefault: opts.default });
    if (opts.alias) {
        command.alias(opts.alias);
    }
    command
        .allowUnknownOption()
        .description(opts.desc)
        .action(args => {
            const options = getCommandOptions(packageJson, process.argv.slice(2));
            if (opts.cliOnly) {
                logger.debug('Executing CLI only script');
                /* eslint-disable global-require, import/no-dynamic-require */
                require(`./${key}`)(program.args, options, env);
                /* eslint-enable */
            } else {
                if (key === 'server') {
                    logger.error('Please run "jhipster --skip-client" instead');
                }
                if (key === 'client') {
                    logger.error('Please run "jhipster --skip-server" instead');
                }
                runYoCommand(key, program.args, options, opts);
            }
        })
        .on('--help', () => {
            if (opts.help) {
                logger.info(opts.help);
            } else {
                logger.debug('Adding additional help info');
                env.run(`${JHIPSTER_NS}:${key} --help`, done);
            }
        });
});