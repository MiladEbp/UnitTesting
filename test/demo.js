var expect = require("chai").expect;

describe("test demo", function(){


    describe("test_001", function(){
        it("this code is true", function(){
            //expect("milad").to.equals("milad");
            expect(Math.abs(-5)).to.be.equal(-5);// return fail
            expect(Math.max(1,2,3)).to.be.equal(1);// return fail
        });
        it("it is false", function(){
            //expect("milad").to.equals("2");
            expect(Math.abs(-3)).to.be.equal(3);//return true

        });

        it("return zero",function(){
            expect(Math.abs(0)).to.be.equal(0);// return true
            expect(Math.min(1,2,3)).to.be.equal(3);// return fail
        });
    });

 /*   describe("test_002", function(){
        it("test except value", function(){
            expect("milad").to.equals("milad");
        });
    });*/

});