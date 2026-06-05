// Hash is a process to convert data (key, value, etc) using hush function, into
// fized size number (hash value), which is used to determine where the data is 
// stored in a hash table.

// Bucket - storage location for data in hash table. Each bucket can handle/hold 
// one or more items depending of collisions management.

// Collision happens when two or more different keys produce the same index and 
// map the same bucket in hash table.

// Load factor is number of items divided by number of buckets ( threshold 0.75 
// which is used as indicator for when we need to increase number of buckets).)