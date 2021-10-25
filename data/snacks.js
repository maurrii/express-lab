const snacks = [
	{ type: 'snickers', good: true, _id: 125224 },
	{ type: 'Pop-Tart', good: true, _id: 127905 },
	{ type: 'cookies', good: true, _id: 139609 },
	{ type: 'chips', good: true, _id: 142573 },
]

const find = (conditions, callback) => {
  // see if this works, if not, execute the code in the catch block
  try {
    // make sure that conditions is an object - if not throw a TypeError
    if (!(conditions instanceof Object)){
      throw new TypeError('Please pass in an object')
    }
    // If the object is empty, return all the todos
    if (Object.keys(conditions).length === 0) return callback(null, snacks)
	// deal with errors
  } catch (error) {
    console.log(error)
    callback(error, [])
  }
}

export { 
	find
}
