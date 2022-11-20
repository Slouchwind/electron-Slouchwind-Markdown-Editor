const spawn = require('cross-spawn');

spawn.sync('npm', ['run', 'build::react'], { stdio: 'ignore' });
console.log('Build done!');
spawn.sync('npm', ['run', 'build::elec'], { stdio: 'ignore' });