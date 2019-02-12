/*
 * SPDX-License-Identifier: Apache-2.0
 */

'use strict';

const { Contract } = require('fabric-contract-api');

class FabCar extends Contract {

    async initLedgerClients(ctx) {
        console.info('============= START : Initialize Ledger ===========');
        const clients = [
            {
                id: 'user1',
                name: '김정수',
                age: 30,
                sex: 'man',
                phonenumber: '010-4974-4895',
                image: "https://freecartok.com/wp-content/plugins/all-in-one-seo-pack/images/default-user-image.png",
                area: 'seoul',
                email:'jungsubabo@naver.com',
                accountNum: '4567-49564-489456',
                residentNumber: '890902-1564151',     
            },
            {
                id: 'user2',
                name: '김정수',
                age: 30,
                sex: 'man',
                phonenumber: '010-4974-4895',
                image: "https://freecartok.com/wp-content/plugins/all-in-one-seo-pack/images/default-user-image.png",
                area: 'seoul',
                email:'jungsubabo@naver.com',
                accountNum: '4567-49564-489456',
                residentNumber: '890902-1564151',     
            },
            {
                id: 'user3',
                name: '김정수',
                age: 30,
                sex: 'man',
                phonenumber: '010-4974-4895',
                image: "https://freecartok.com/wp-content/plugins/all-in-one-seo-pack/images/default-user-image.png",
                area: 'seoul',
                email:'jungsubabo@naver.com',
                accountNum: '4567-49564-489456',
                residentNumber: '890902-1564151',     
            },
            {
                id: 'user4',
                name: '김정수',
                age: 30,
                sex: 'man',
                phonenumber: '010-4974-4895',
                image: "https://freecartok.com/wp-content/plugins/all-in-one-seo-pack/images/default-user-image.png",
                area: 'seoul',
                email:'jungsubabo@naver.com',
                accountNum: '4567-49564-489456',
                residentNumber: '890902-1564151',     
            },
            {
                id: 'user5',
                name: '김정수',
                age: 30,
                sex: 'man',
                phonenumber: '010-4974-4895',
                image: "https://freecartok.com/wp-content/plugins/all-in-one-seo-pack/images/default-user-image.png",
                area: 'seoul',
                email:'jungsubabo@naver.com',
                accountNum: '4567-49564-489456',
                residentNumber: '890902-1564151',     
            },
            {
                id: 'user6',
                name: '김정수',
                age: 30,
                sex: 'man',
                phonenumber: '010-4974-4895',
                image: "https://freecartok.com/wp-content/plugins/all-in-one-seo-pack/images/default-user-image.png",
                area: 'seoul',
                email:'jungsubabo@naver.com',
                accountNum: '4567-49564-489456',
                residentNumber: '890902-1564151',     
            },
            {
                id: 'user7',
                name: '김정수',
                age: 30,
                sex: 'man',
                phonenumber: '010-4974-4895',
                image: "https://freecartok.com/wp-content/plugins/all-in-one-seo-pack/images/default-user-image.png",
                area: 'seoul',
                email:'jungsubabo@naver.com',
                accountNum: '4567-49564-489456',
                residentNumber: '890902-1564151',     
            },
            {
                id: 'user8',
                name: '김정수',
                age: 30,
                sex: 'man',
                phonenumber: '010-4974-4895',
                image: "https://freecartok.com/wp-content/plugins/all-in-one-seo-pack/images/default-user-image.png",
                area: 'seoul',
                email:'jungsubabo@naver.com',
                accountNum: '4567-49564-489456',
                residentNumber: '890902-1564151',     
            },
            {
                id: 'user10',
                name: '김정수',
                age: 30,
                sex: 'man',
                phonenumber: '010-4974-4895',
                image: "https://freecartok.com/wp-content/plugins/all-in-one-seo-pack/images/default-user-image.png",
                area: 'seoul',
                email:'jungsubabo@naver.com',
                accountNum: '4567-49564-489456',
                residentNumber: '890902-1564151',     
            },
            {
                id: 'user11',
                name: '김정수',
                age: 30,
                sex: 'man',
                phonenumber: '010-4974-4895',
                image: "https://freecartok.com/wp-content/plugins/all-in-one-seo-pack/images/default-user-image.png",
                area: 'seoul',
                email:'jungsubabo@naver.com',
                accountNum: '4567-49564-489456',
                residentNumber: '890902-1564151',     
            },
            {
                id: 'user12',
                name: '김정수',
                age: 30,
                sex: 'man',
                phonenumber: '010-4974-4895',
                image: "https://freecartok.com/wp-content/plugins/all-in-one-seo-pack/images/default-user-image.png",
                area: 'seoul',
                email:'jungsubabo@naver.com',
                accountNum: '4567-49564-489456',
                residentNumber: '890902-1564151',     
            },
        ];

        for (let i = 0; i < clients.length; i++) {
            clients[i].docType = 'client';
            await ctx.stub.putState('Client' + i, Buffer.from(JSON.stringify(clients[i])));
            console.info('Added <--> ', clients[i]);
        }
        console.info('============= END : Initialize Clinet Ledger ===========');
    }



    async initLedgerPlanners(ctx) {
        console.info('============= START : Initialize Ledger ===========');
        const planners = [
            {
                id: 'planner1',
                name: '권태희', 
                startDay: "18.09.04",
                clientNum: 80,
                team: 'kalon',
                averageEstimation: 4,
                uri: "http://img.hankyung.com/photo/201808/01.17511742.1.jpg",
                smartRecommedPoint: 10,
                comment: "미모가 보험 설계의 전부.",
                residentNumber: '900629',
                sex: 'woman',
                activeArea: 'seoul',
                career: 'KB손해보험 2년차',
                phoneNum: '010-4974-4895',
                certificateemail:'dfdsklfdsjkl@gmail.com',
            },
            {
                id: 'planner2',
                name: "김정수",
                startDay: "18.06.29",
                clientNum: 1,
                team: "KB생명",
                averageEstimation: 4,
                uri: "https://images.shazam.com/coverart/t40174962-b767300956_s400.jpg",
                smartRecommedPoint: 100,
                comment: "설계의 차이는 곧 경험의 차이.",
                residentNumber: '900629',
                sex: 'woman',
                activeArea: 'seoul',
                career: 'KB손해보험 2년차',
                phoneNum: '010-4974-4895',
                certificateemail:'dfdsklfdsjkl@gmail.com',
            },
            {
                id: 'planner3',
                name: "김유준",
                startDay: "18.09.02", //설계사 등록일
                clientNum: 384,
                team: "HICompany",
                averageEstimation: 5, //별점
                uri: "https://kizmom.hankyung.com/pdsdata/model/KIZMOM_20170602100640.jpg",
                smartRecommedPoint: 14,
                comment: "진짜 이거 너무 빡세다..",
                residentNumber: '900629',
                sex: 'woman',
                activeArea: 'seoul',
                career: 'KB손해보험 2년차',
                phoneNum: '010-4974-4895',
                certificateemail:'dfdsklfdsjkl@gmail.com',
            },
            {
                id: 'planner4',
                name: "권희",
                startDay: "18.09.04", //설계사 등록일
                clientNum: 80,
                team: "kalon",
                averageEstimation: 4, //별점
                uri: "http://img.hankyung.com/photo/201808/01.17511742.1.jpg",
                smartRecommedPoint: 90,
                comment: "설계의 전부.",
                residentNumber: '900629',
                sex: 'woman',
                activeArea: 'seoul',
                career: 'KB손해보험 2년차',
                phoneNum: '010-4974-4895',
                certificateemail:'dfdsklfdsjkl@gmail.com',
            },
            {
                id: 'planner5',
                name: "이태희",
                startDay: "18.09.04", //설계사 등록일
                clientNum: 80,
                team: "kalon",
                averageEstimation: 3, //별점
                uri: "http://img.hankyung.com/photo/201808/01.17511742.1.jpg",
                smartRecommedPoint: 25,
                comment: "마음과 달랐어 왜 이렇게 달라지는 건지.",
                residentNumber: '900629',
                sex: 'woman',
                activeArea: 'seoul',
                career: 'KB손해보험 2년차',
                phoneNum: '010-4974-4895',
                certificateemail:'dfdsklfdsjkl@gmail.com',
            },
            {
                id: 'planner6',
                name: "권희태",
                startDay: "18.09.04", //설계사 등록일
                clientNum: 80,
                team: "kalon",
                averageEstimation: 2, //별점
                uri: "http://img.hankyung.com/photo/201808/01.17511742.1.jpg",
                smartRecommedPoint: 1,
                comment: "왜 함께한 날들이 떠오르는지 .",
                residentNumber: '900629',
                sex: 'woman',
                activeArea: 'seoul',
                career: 'KB손해보험 2년차',
                phoneNum: '010-4974-4895',
                certificateemail:'dfdsklfdsjkl@gmail.com',
            },
            {
                id: 'planner7',
                name: "김준",
                startDay: "18.09.02", //설계사 등록일
                clientNum: 384,
                team: "HICompany",
                averageEstimation: 1, //별점
                uri: "https://kizmom.hankyung.com/pdsdata/model/KIZMOM_20170602100640.jpg",
                smartRecommedPoint: 32,
                comment: "혹시 나와같은지 바쁜일상속에 내생각은...",
                residentNumber: '900629',
                sex: 'woman',
                activeArea: 'seoul',
                career: 'KB손해보험 2년차',
                phoneNum: '010-4974-4895',
                certificateemail:'dfdsklfdsjkl@gmail.com',
            },
            {
                id: 'planner8',
                name: "유준김",
                startDay: "18.09.02", //설계사 등록일
                clientNum: 384,
                team: "HICompany",
                averageEstimation: 3, //별점
                uri: "https://kizmom.hankyung.com/pdsdata/model/KIZMOM_20170602100640.jpg",
                smartRecommedPoint: 32,
                comment: "운다고 달라지는 일은 아무것도 없어요.",
                residentNumber: '900629',
                sex: 'woman',
                activeArea: 'seoul',
                career: 'KB손해보험 2년차',
                phoneNum: '010-4974-4895',
                certificateemail:'dfdsklfdsjkl@gmail.com',
            },
            {
                id: 'planner9',
                name: "김유준",
                startDay: "18.09.02", //설계사 등록일
                clientNum: 384,
                team: "HICompany",
                averageEstimation: 2, //별점
                uri: "https://kizmom.hankyung.com/pdsdata/model/KIZMOM_20170602100640.jpg",
                smartRecommedPoint: 23,
                comment: "후회하지 않는지 끝이라는게... 생각보다 쉬운일.",
                residentNumber: '900629',
                sex: 'woman',
                activeArea: 'seoul',
                career: 'KB손해보험 2년차',
                phoneNum: '010-4974-4895',
                certificateemail:'dfdsklfdsjkl@gmail.com',
            },
            {
                id: 'planner10',
                name: '권태희', 
                startDay: "18.09.04",
                clientNum: 80,
                team: 'kalon',
                averageEstimation: 4,
                uri: "http://img.hankyung.com/photo/201808/01.17511742.1.jpg",
                smartRecommedPoint: 10,
                comment: "미모가 보험 설계의 전부.",
                residentNumber: '900629',
                sex: 'woman',
                activeArea: 'seoul',
                career: 'KB손해보험 2년차',
                phoneNum: '010-4974-4895',
                certificateemail:'dfdsklfdsjkl@gmail.com',
            },
            {
                id: 'planner11',
                name: '권태희', 
                startDay: "18.09.04",
                clientNum: 80,
                team: 'kalon',
                averageEstimation: 4,
                uri: "http://img.hankyung.com/photo/201808/01.17511742.1.jpg",
                smartRecommedPoint: 10,
                comment: "미모가 보험 설계의 전부.",
                residentNumber: '900629',
                sex: 'woman',
                activeArea: 'seoul',
                career: 'KB손해보험 2년차',
                phoneNum: '010-4974-4895',
                certificateemail:'dfdsklfdsjkl@gmail.com',
            },
        ];

        for (let i = 0; i < planners.length; i++) {
            planners[i].docType = 'planner';
            await ctx.stub.putState('Planner' + i, Buffer.from(JSON.stringify(planners[i])));
            console.info('Added <--> ', planners[i]);
        }
        console.info('============= END : Initialize Planner Ledger ===========');
    }



    


    async initLedgerContractedInsurance(ctx) {
        console.info('============= START : Initialize Ledger ===========');
        const insurances = [
            {
                UserInsuranceID: 1,
                insuranceId: 1111,
                name: "국민 행복 암 보험",
                startDay: "18.06.29",
                contractor: "김정수",
                insured: " 김정수",
                price: "10000",
                insuranceCo: "메리츠",
                insurancStock: true,
                userId: 'user1',
                plannerId: 'planner1',
                specialContents: 'detailContents1'
            
              },
              {
                UserInsuranceID: 2,
                insuranceId: 1111,
                name: "변비 보험",
                startDay: "18.09.04",
                contractor: "김수정",
                insured: " 김수정",
                price: "12350",
                insuranceCo: "국민",
                insurancStock: false,
                userId: 'user1',
                plannerId: 'planner1',
                specialContents: 'detailContents1'
              },
              {
                UserInsuranceID: 3,
                insuranceId: 1111,
                name: "설사 보험",
                startDay: "18.09.02",
                contractor: "수정김",
                insured: " 수김정",
                price: "132450",
                insuranceCo: "삼성",
                insurancStock: false,
                userId: 'user1',
                plannerId: 'planner1',
                specialContents: 'detailContents1'
              },
              {
                UserInsuranceID: 4,
                insuranceId: 1111,
                name: "복통 보험",
                startDay: "18.09.04",
                contractor: "김태희",
                insured: "김태희",
                price: "12350",
                insuranceCo: "국민",
                insurancStock: false,
                userId: 'user1',
                plannerId: 'planner1',
                specialContents: 'detailContents1'
              },
              {
                UserInsuranceID: 5,
                insuranceId: 1111,
                name: "인민 암 보험",
                startDay: "18.06.29",
                contractor: "김정수",
                insured: " 김정수",
                price: "10000",
                insuranceCo: "메리츠",
                insurancStock: false,
                userId: 'user1',
                plannerId: 'planner1',
                specialContents: 'detailContents1'
              },
              {
                UserInsuranceID: 6,
                insuranceId: 1111,
                name: "인민 설사 보험 ",
                startDay: "18.06.29",
                contractor: "김정수",
                insured: " 김정수",
                price: "10000",
                insuranceCo: "삼성",
                insurancStock: false,
                userId: 'user1',
                plannerId: 'planner1',
                specialContents: 'detailContents1'
              },
        ];

        for (let i = 0; i < insurances.length; i++) {
            insurances[i].docType = 'insurance';
            await ctx.stub.putState('Insurance' + i, Buffer.from(JSON.stringify(insurances[i])));
            console.info('Added <--> ', insurances[i]);
        }
        console.info('============= END : Initialize ContractedInsurance Ledger ===========');
    }
    async initLedgerClaimInsurance(ctx) {
        console.info('============= START : Initialize Ledger ===========');
        const claims = [
            {
                accidentName: "교통사고",
                accidentDay: "18.06.29",
                requestDay: "180629",
                accidentNum: "045sD456",
                insuranceName: " 김정수",
                insuranceCo: "삼성",
                stateReceive: false,
                userId: 'user1', 
                image: 'insurance.jpg',
              },
              {
                accidentName: "치과진단 ",
                accidentDay: "18.09.04",
                requestDay: "180630",
                accidentNum: "54SDFN6",
                insuranceName: " 권태희",
                insuranceCo: "국민",
                stateReceive: "3,000",
                userId: 'user1', 
                image: 'insurance.jpg',
              },
              {
                accidentName: "복통",
                accidentDay: "18.05.02",
                requestDay: "180902",
                accidentNum: "SDF5423",
                insuranceName: "김희태",
                insuranceCo: "메리츠",
                stateReceive: false,
                userId: 'user1', 
                image: 'insurance.jpg',
              },
              {
                accidentName: "비염",
                accidentDay: "18.06.01",
                requestDay: "180904",
                accidentNum: "0sd45f",
                insuranceName: " 김유준",
                insuranceCo: "삼성",
                stateReceive: "2,500",
                userId: 'user1', 
                image: 'insurance.jpg',
              },
              {
                accidentName: "두통",
                accidentDay: "18.08.21",
                requestDay: "180930",
                accidentNum: "sdf12s1",
                insuranceName: " 김수정",
                insuranceCo: "메리츠",
                stateReceive: "500",
                userId: 'user1', 
                image: 'insurance.jpg',
              },
              {
                accidentName: " 머리아픔 ",
                accidentDay: "18.08.21",
                requestDay: "170203",
                accidentNum: "sdf165s1",
                insuranceName: " 김수정",
                insuranceCo: "메리츠",
                stateReceive: false,
                userId: 'user1', 
                image: 'insurance.jpg',
              }
        ];

        for (let i = 0; i < claims.length; i++) {
            claims[i].docType = 'claim';
            await ctx.stub.putState('Claim' + i, Buffer.from(JSON.stringify(claims[i])));
            console.info('Added <--> ', claims[i]);
        }
        console.info('============= END : Initialize ClaimInsurance Ledger ===========');
    }



    async initLedgerStocks(ctx) {
        console.info('============= START : Initialize Ledger ===========');
        const stocks = [
            {
                userId: 'user1', 
                name: '가족사랑 암보험',
                image: 'stock.jpg',
                InsuranceCompany: 'Samsung',
            },
            {
                userId: 'user1', 
                name: '가족사랑 암보험',
                image: 'stock.jpg',
                InsuranceCompany: 'Samsung',
            },
            {
                userId: 'user1', 
                name: '가족사랑 암보험',
                image: 'stock.jpg',
                InsuranceCompany: 'Samsung',
            },
            {
                userId: 'user1', 
                name: '가족사랑 암보험',
                image: 'stock.jpg',
                InsuranceCompany: 'Samsung',
            },
            {
                userId: 'user1', 
                name: '가족사랑 암보험',
                image: 'stock.jpg',
                InsuranceCompany: 'Samsung',
            },
            {
                userId: 'user1', 
                name: '가족사랑 암보험',
                image: 'stock.jpg',
                InsuranceCompany: 'Samsung',
            },
            {
                userId: 'user1', 
                name: '가족사랑 암보험',
                image: 'stock.jpg',
                InsuranceCompany: 'Samsung',
            },
            {
                userId: 'user1', 
                name: '가족사랑 암보험',
                image: 'stock.jpg',
                InsuranceCompany: 'Samsung',
            },
            {
                userId: 'user1', 
                name: '가족사랑 암보험',
                image: 'stock.jpg',
                InsuranceCompany: 'Samsung',
            },
            {
                userId: 'user1', 
                name: '가족사랑 암보험',
                image: 'stock.jpg',
                InsuranceCompany: 'Samsung',
            },
            {
                userId: 'user1', 
                name: '가족사랑 암보험',
                image: 'stock.jpg',
                InsuranceCompany: 'Samsung',
            },
        ];

        for (let i = 0; i < stocks.length; i++) {
            stocks[i].docType = 'stock';
            await ctx.stub.putState('Stock' + i, Buffer.from(JSON.stringify(stocks[i])));
            console.info('Added <--> ', stocks[i]);
        }
        console.info('============= END : Initialize ClaimInsurance Ledger ===========');
    }


    async initLedgerUserComments(ctx) {
        console.info('============= START : Initialize Ledger ===========');
        const comments = [
            {
                username: "kth0904",
                comment: "정말 감사합니다. 보험설계 너무 친절해요!!!",
                start: 5,
                uri:"http://file2.instiz.net/data/file/20150402/c/a/3/ca3af4d6bc638ed6dc480512626dd498.jpg",
                boardId: 'planner1'
            },
            {
                username: "kjs0629",
                comment: "감동먹었어요. 다음에 또 잘 부탁드릴게요",
                start: 4,
                uri:"http://mblogthumb1.phinf.naver.net/MjAxNzA0MTBfOTkg/MDAxNDkxNzU4ODg1OTk1.nU1pHWwcRQJTDAW8n0PXT5ZpnzNmsY8q7Q2sU9Oz3gUg.q32BKdoiXaYqFjw0eIXnueRVuvadNpmA-jcdIHsZS4Eg.JPEG.jessi00812/1.jpg?type=w800"
                ,boardId: 'planner1'
            },
            {
                username: "sdfnosv121",
                comment: "정말 즐거운 시간이었습니다. 다음에 또 만나요.",
                start: 2,
                uri: "https://t1.daumcdn.net/cfile/tistory/2549224B5848BC4F0C"
                ,boardId: 'planner1'
            },
            {
                username: "sdfo12138",
                comment: "이번년도 목표는 이미 이루었습니다. 장난한번봐요",
                start: 3,
                uri: "https://fimg2.pann.com/new/download.jsp?FileID=24714962"
                ,boardId: 'planner1'
            },
            {
                username: "yej0424",
                comment: "저는 이제 떠나려고 합니다. 세상아 안녕",
                start: 2,
                uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNlxFQC8vg1w3xit2zNNC-AqEiWOc_UFEWyvXPI_s50S22EbuTyw"
                ,boardId: 'planner1'
            },
            {
                username: "skin2nirv",
                comment: "정말 설계를 머 같이 하시네요.",
                start: 1,
                uri: "https://www.google.com/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&ved=2ahUKEwj5pZHJ-6XgAhUCabwKHeMXD7IQjRx6BAgBEAU&url=https%3A%2F%2Fweheartit.com%2Fentry%2F219428443&psig=AOvVaw0cA_87uMlRDW2aeD04WZ51&ust=1549503248275201",
                boardId: 'planner1'
            },

        ];

        for (let i = 0; i < comments.length; i++) {
            comments[i].docType = 'comment';
            await ctx.stub.putState('Comment' + i, Buffer.from(JSON.stringify(comments[i])));
            console.info('Added <--> ', comments[i]);
        }
        console.info('============= END : Initialize UserComments Ledger ===========');
    }
   


    async queryCar(ctx, carNumber) {
        const carAsBytes = await ctx.stub.getState(carNumber); // get the car from chaincode state
        if (!carAsBytes || carAsBytes.length === 0) {
            throw new Error(`${carNumber} does not exist`);
        }
        console.log(carAsBytes.toString());
        return carAsBytes.toString();
    }

    async createCar(ctx, carNumber, make, model, color, owner) {
        console.info('============= START : Create Car ===========');

        const car = {
            color,
            docType: 'car',
            make,
            model,
            owner,
        };

        await ctx.stub.putState(carNumber, Buffer.from(JSON.stringify(car)));
        console.info('============= END : Create Car ===========');
    }

    async queryAllClients(ctx) {
        const startKey = 'Client0';
        const endKey = 'Client999';

        const iterator = await ctx.stub.getStateByRange(startKey, endKey);

        const allResults = [];
        while (true) {
            const res = await iterator.next();

            if (res.value && res.value.value.toString()) {
                console.log(res.value.value.toString('utf8'));

                const Key = res.value.key;
                let Record;
                try {
                    Record = JSON.parse(res.value.value.toString('utf8'));
                } catch (err) {
                    console.log(err);
                    Record = res.value.value.toString('utf8');
                }
                allResults.push({ Key, Record });
            }
            if (res.done) {
                console.log('end of data');
                await iterator.close();
                console.info(allResults);
                return JSON.stringify(allResults);
            }
        }
    }

    async queryAllPlanners(ctx) {
        const startKey = 'Planner0';
        const endKey = 'Planner999';

        const iterator = await ctx.stub.getStateByRange(startKey, endKey);

        const allResults = [];
        while (true) {
            const res = await iterator.next();

            if (res.value && res.value.value.toString()) {
                console.log(res.value.value.toString('utf8'));
     
                const Key = res.value.key;
                let Record;
                try {
                    Record = JSON.parse(res.value.value.toString('utf8'));
                } catch (err) {
                    console.log(err);
                    Record = res.value.value.toString('utf8');
                }
                allResults.push({ Key, Record });
            }
            if (res.done) {
                console.log('end of data');
                await iterator.close();
                console.info(allResults);
                return allResults;
            }
        }
    }


    async queryAllContractedInsurance(ctx) {
        const startKey = 'Insurance0';
        const endKey = 'Insurance999';

        const iterator = await ctx.stub.getStateByRange(startKey, endKey);

        const allResults = [];
        while (true) {
            const res = await iterator.next();

            if (res.value && res.value.value.toString()) {
                console.log(res.value.value.toString('utf8'));

                const Key = res.value.key;
                let Record;
                try {
                    Record = JSON.parse(res.value.value.toString('utf8'));
                } catch (err) {
                    console.log(err);
                    Record = res.value.value.toString('utf8');
                }
                allResults.push({ Key, Record });
            }
            if (res.done) {
                console.log('end of data');
                await iterator.close();
                console.info(allResults);
                return allResults;
            }
        }
    }

    async queryAllClaimInsurance(ctx) {
        const startKey = 'Claim0';
        const endKey = 'Claim999';

        const iterator = await ctx.stub.getStateByRange(startKey, endKey);

        const allResults = [];
        while (true) {
            const res = await iterator.next();

            if (res.value && res.value.value.toString()) {
                console.log(res.value.value.toString('utf8'));

                const Key = res.value.key;
                let Record;
                try {
                    Record = JSON.parse(res.value.value.toString('utf8'));
                } catch (err) {
                    console.log(err);
                    Record = res.value.value.toString('utf8');
                }
                allResults.push({ Key, Record });
            }
            if (res.done) {
                console.log('end of data');
                await iterator.close();
                console.info(allResults);
                return allResults;
            }
        }
    }

    async queryAllClaimInsurance(ctx) {
        const startKey = 'Claim0';
        const endKey = 'Claim999';

        const iterator = await ctx.stub.getStateByRange(startKey, endKey);

        const allResults = [];
        while (true) {
            const res = await iterator.next();

            if (res.value && res.value.value.toString()) {
                console.log(res.value.value.toString('utf8'));

                const Key = res.value.key;
                let Record;
                try {
                    Record = JSON.parse(res.value.value.toString('utf8'));
                } catch (err) {
                    console.log(err);
                    Record = res.value.value.toString('utf8');
                }
                allResults.push({ Key, Record });
            }
            if (res.done) {
                console.log('end of data');
                await iterator.close();
                console.info(allResults);
                return allResults;
            }
        }
    }


    async queryAllStocks(ctx) {
        const startKey = 'Stock0';
        const endKey = 'Stock999';

        const iterator = await ctx.stub.getStateByRange(startKey, endKey);

        const allResults = [];
        while (true) {
            const res = await iterator.next();

            if (res.value && res.value.value.toString()) {
                console.log(res.value.value.toString('utf8'));

                const Key = res.value.key;
                let Record;
                try {
                    Record = JSON.parse(res.value.value.toString('utf8'));
                } catch (err) {
                    console.log(err);
                    Record = res.value.value.toString('utf8');
                }
                allResults.push({ Key, Record });
            }
            if (res.done) {
                console.log('end of data');
                await iterator.close();
                console.info(allResults);
                return allResults;
            }
        }
    }

    async queryAllUserComments(ctx) {
        const startKey = 'Comment0';
        const endKey = 'Comment999';

        const iterator = await ctx.stub.getStateByRange(startKey, endKey);

        const allResults = [];
        while (true) {
            const res = await iterator.next();

            if (res.value && res.value.value.toString()) {
                console.log(res.value.value.toString('utf8'));

                const Key = res.value.key;
                let Record;
                try {
                    Record = JSON.parse(res.value.value.toString('utf8'));
                } catch (err) {
                    console.log(err);
                    Record = res.value.value.toString('utf8');
                }
                allResults.push({ Key, Record });
            }
            if (res.done) {
                console.log('end of data');
                await iterator.close();
                console.info(allResults);
                return allResults;
            }
        }
    }

    async changeCarOwner(ctx, carNumber, newOwner) {
        console.info('============= START : changeCarOwner ===========');

        const carAsBytes = await ctx.stub.getState(carNumber); // get the car from chaincode state
        if (!carAsBytes || carAsBytes.length === 0) {
            throw new Error(`${carNumber} does not exist`);
        }
        const car = JSON.parse(carAsBytes.toString());
        car.owner = newOwner;

        await ctx.stub.putState(carNumber, Buffer.from(JSON.stringify(car)));
        console.info('============= END : changeCarOwner ===========');
    }

}

module.exports = FabCar;
