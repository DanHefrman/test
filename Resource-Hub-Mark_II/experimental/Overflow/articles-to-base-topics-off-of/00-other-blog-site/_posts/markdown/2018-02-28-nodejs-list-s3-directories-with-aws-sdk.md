&lt;!DOCTYPE html&gt;

When we use [aws-sdk](https://www.npmjs.com/package/aws-sdk) to [list objects](https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/S3.html#listObjectsV2-property) in s3 bucket it will list objects without any seperation between `directories` and `files`. The easy way to list all directories is to use `Delimiter` option.

Use `Delimiter` as `/` will result in list of `CommonPrefixes` in the response.

    var AwsS3 = require ('aws-sdk/clients/s3');
    const s3 = new AwsS3 ({
      accessKeyId: '',
      secretAccessKey: '',
      region: 'ap-south-1',
    });

    const listDirectories = params => {
      return new Promise ((resolve, reject) => {
        const s3params = {
          Bucket: 'bucket-name',
          MaxKeys: 20,
          Delimiter: '/',
        };
        s3.listObjectsV2 (s3params, (err, data) => {
          if (err) {
            reject (err);
          }
          resolve (data);
        });
      });
    };

The above code will list the directories in the bucket root. The sample response will look like

    {
      "IsTruncated": false,
      "Contents": [],
      "Name": "bucket-name",
      "Prefix": "",
      "Delimiter": "/",
      "MaxKeys": 20,
      "CommonPrefixes": [
        {
          "Prefix": "directory-1/"
        },
        {
          "Prefix": "directory-2/"
        },
        {
          "Prefix": "directory-3/"
        },
        {
          "Prefix": "directory-4/"
        }
      ],
      "KeyCount": 4
    }

If we want to list the directories inside the one of the listed directory, Pass the directory name as `Prefix`.

    const listDirectories = params => {
      return new Promise ((resolve, reject) => {
        const s3params = {
          Bucket: 'bucket-name',
          MaxKeys: 20,
          Delimiter: '/',
          Prefix: 'directory-1/'
        };
        s3.listObjectsV2 (s3params, (err, data) => {
          if (err) {
            reject (err);
          }
          resolve (data);
        });
      });
    };

Hope it helped.  
Let me know if you have any feedback or corrections via comments
