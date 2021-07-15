const dotenv = require('dotenv');
dotenv.config();


module.exports = {
    aws_s3_uri : process.env.REACT_APP_AWS_S3_URI
}