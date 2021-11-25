// USE *CONSOLE.ASSERT* TO MAKE CONDITIONAL LOG STATEMENTS

// The way most people do it...

if (!user.id) {
  console.log('User id is missing');
}

// Using *console.assert*

console.assert(user.id, 'User id is missing');