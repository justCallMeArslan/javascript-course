// It is possible to create template repo n github, which will host setups which 
// can be reused as template for creating other repos.





// Best Practices
// Here are some best practices for writing npm scripts:

// 1. Keep scripts simple and readable: It is important to keep your scripts simple 
// and easy to read. Use meaningful script names and avoid writing long scripts 
// with many commands. Break down complex tasks into smaller sub-tasks and write 
// separate scripts for them.

// 2. Use variables: Use environment variables to store commonly used values, such 
// as directories or file paths, and use them in your scripts to avoid hardcoding.

// 3. Use package.json to declare dependencies: Declare dependencies in your package.json
// file instead of installing them inside your scripts. This will ensure that 
// your dependencies are installed before your script runs.

// 4. Avoid platform-specific commands: Avoid using platform-specific commands in 
// your scripts. Use cross-platform tools like Node.js or Bash to ensure that 
// your scripts work on different platforms. For instance, if you want your npm 
// script to remove a certain directory using the rm -rf command, this would 
// work perfectly on a Linux or Mac machine but would error out on Windows. 
// To avoid this, you can use a cross-platform package such as rimraf.

// 5. Keep scripts independent: Keep your scripts independent of each other to avoid 
// dependency issues. If you need to run one script after another, use a task 
// runner like Gulp or Grunt to define tasks and their dependencies.

// 6. Use exit codes: Use exit codes to indicate the success or failure of your scripts. 
// Return a non-zero exit code to indicate that the script failed and zero to 
// indicate that the script succeeded.

// 7. Use pre- and post-scripts: Use pre- and post-scripts to execute common tasks 
// before and after your scripts run. For example, use pre-scripts to ensure that 
// your dependencies are up-to-date and post-scripts to clean up any temporary files.