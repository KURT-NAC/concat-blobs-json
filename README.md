# concat-blobs

simple node app that generates a script based on a combination of blobs, configurable via json.

#### config example
~~~~
{
  "filePaths": {
    "blob1": "./blobs/blob1.js",
    "blob2": "./blobs/blob2.js",
  },
  "cc": {
    "script1: {
      "feature1": "blob1"
    }
  }
}
~~~~ 

#### how to build the scripts
> npm start


#### clean task (deletes deploy dir)
> npm run clean
