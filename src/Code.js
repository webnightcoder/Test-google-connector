function myFunction() {
  
}


function getAuthType() {
    return {
        type: "NONE"
    };
}

function getConfig() {
    return {
        dateRangeRequired: true
    };
}

function getData(){
    return "Test User";
}

function getSchema(){
    return {
        schema : [
            {
                name : 'sachin Yadav',
                Job_title : "Full Stack Developer"
            },
            {
                name : 'Nitesh Diwan',
                Job_title : "Php Developer"
            }
        ]
    }
}

function isAdminUser(){
    return true;
}