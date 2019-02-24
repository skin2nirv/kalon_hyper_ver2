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
                name: '이명우',
                age: 37,
                sex: 'man',
                phonenumber: '010-3244-6452',
                image: "https://c.pxhere.com/images/83/47/34059fbbeb030532db3efd773f38-1432915.jpg!d"
,
                area: 'seoul',
                email:'mk201@naver.com',
                accountNum: '2343-49564-482359',
                residentNumber: '831002-1521451',     
            },
            {
                id: 'user2',
                name: '최유리',
                age: 29,
                sex: 'woman',
                phonenumber: '010-4234-6785',
                image: "https://c.pxhere.com/images/49/ce/1aa023be2db2dd135006212751eb-1419067.jpg!d"
,
                area: 'Gwangju',
                email:'yychoi@naver.com',
                accountNum: '3243-32144-234235',
                residentNumber: '910303-2535612',     
            },
            {
                id: 'user3',
                name: '박대우',
                age: 33,
                sex: 'man',
                phonenumber: '010-6456-3244',
                image: "https://c.pxhere.com/images/8c/df/cb62014c0ae743c2b3c601585c67-1432843.jpg!d"
,
                area: 'seoul',
                email:'tpk404ys@gmail.com',
                accountNum: '8567-77754-542676',
                residentNumber: '871112-1543162',     
            },
            {
                id: 'user4',
                name: '박민지',
                age: 42,
                sex: 'woman',
                phonenumber: '010-3327-6687',
                Image: "https://c.pxhere.com/photos/a0/49/mom_daughter_kid_sea_mother_child-1140225.jpg!d"
,
                area: 'ulsan',
                email:'parkmj6211@naver.com',
                accountNum: '4567-49564-489456',
                residentNumber: '780101-2848482',     
            },
            {
                id: 'user5',
                name: '박진형',
                age: 11,
                sex: 'man',
                phonenumber: '010-9082-3325',
                image: "https://c.pxhere.com/images/26/b9/ea5d9b560316a6dbe5fc4fc0a552-1419082.png!d"
,
                area: 'yeosu',
                email:'jjh1011@naver.com',
                accountNum: '5522-13579-635789',
                residentNumber: '010307-3564151',     
            },
            {
                id: 'user6',
                name: '이나래',
                age: 2,
                sex: 'woman',
                phonenumber: '010-4467-2274',
                image: "https://c.pxhere.com/photos/98/b5/baby_baby_models_children-877608.jpg!d"
,
                area: 'gyeonggi suwon',
                email:'narae2@naver.com',
                accountNum: '8522-74368-413456',
                residentNumber: '181218-4429038',     
            },
            {
                id: 'user7',
                name: '조기웅',
                age: 33,
                sex: 'man',
                phonenumber: '010-3466-8467',
                image: "https://c.pxhere.com/images/1a/4f/e66d65aa89d9e14e6ab19ae854a4-1432849.jpg!d"
,
                area: 'seoul',
                email:'jkkiwoong0308@naver.com',
                accountNum: '8654-75435-775433',
                residentNumber: '870507-1939214',     
            },
            {
                id: 'user8',
                name: '오상호',
                age: 39,
                sex: 'man',
                phonenumber: '010-3245-1243',
                image: "https://c.pxhere.com/images/90/52/afb3b7db5a59c414f22f4f860390-1432835.jpg!d"
,
                area: 'busan',
                email:'5sangho555@gmail.com',
                accountNum: '3427-33464-445796',
                residentNumber: '811030-1187648',     
            },
            {
                id: 'user10',
                name: '김준원',
                age: 28,
                sex: 'man',
                phonenumber: '010-2443-6758',
                image: "https://c.pxhere.com/images/0c/27/9d2db6e085eb55fff9569cd3f885-1428531.jpg!d"
,
                area: 'gyeonggi ansan',
                email:'junna2828@google.com',
                accountNum: '5234-43546-234687',
                residentNumber: '920414-1348651',     
            },
            {
                id: 'user11',
                name: '김민정',
                age: 36,
                sex: 'woman',
                phonenumber: '010-3424-9995',
                image: "https://c.pxhere.com/photos/67/59/woman_pregnant_asian_chinese_pregnant_woman_belly_young_love-832579.jpg!d"
                ,    
                area: 'seoul',
                email:'mkkim8806@naver.com',
                accountNum: '2343-43248-489456',
                residentNumber: '841106-2208415',     
            },
            {
                id: 'user12',
                name: '안민호',
                age: 30,
                sex: 'man',
                phonenumber: '010-1124-6654',
                image: "https://c.pxhere.com/images/8e/9c/b7e6b3e858ad961aa1edb1cfdebf-1428657.jpg!d"
,
                area: 'seoul',
                email:'hun3329nam@gmail.com',
                accountNum: '6423-23443-234332',
                residentNumber: '900517-1239851',     
            },

        ];

        for (let i = 0; i < clients.length; i++) {
            clients[i].docType = 'client';
            await ctx.stub.putState('Client' + i, Buffer.from(JSON.stringify(clients[i])));
            console.info('Added <--> ', clients[i]);
        }
        console.info('============= END : Initialize Clinet Ledger ===========');
    }



    async initLedgerCoin(ctx) {
        console.info('============= START : Initialize Ledger ===========');
        const coins = [
            {
                id: 'user1',
                coinId: 'Coin1',
                coin : 45
            },
            {
                id: 'planner1',
                coinId : 'Coin2',
                coin : 2300
            },
        ];

        for (let i = 0; i < coins.length; i++) {
            coins[i].docType = 'coin';
            await ctx.stub.putState('Coin' + i, Buffer.from(JSON.stringify(coins[i])));
            console.info('Added <--> ', coins[i]);
        }
        console.info('============= END : Initialize Clinet Ledger ===========');
    }



    async initLedgerPlanners(ctx) {
        console.info('============= START : Initialize Ledger ===========');
        const planners = [
                {
                    id: 'planner1',
                    name: '오유나', 
                    startDay: "18.01.04",
                    clientNum: 80,
                    team: 'kalon',
                    averageEstimation: 4,
                    uri: "https://c.pxhere.com/images/49/ce/1aa023be2db2dd135006212751eb-1419067.jpg!d",
                    smartRecommedPoint: 10,
                    comment: "재무설계 가능한 설계사",
                    residentNumber: '900629',
                    sex: 'woman',
                    activeArea: 'seoul',
                    career: 'KB손해보험 2년차',
                    phoneNum: '010-2343-4464',
                    certificateemail:'yoona2343@gmail.com',
                    carPoint : 213,
                    babyPoint : 13,
                    savePoint : 135,
                    guaranteePoint :58,
                    coin : 234
                },
                {
                    id: 'planner2',
                    name: "곽우진",
                    startDay: "15.03.29",
                    clientNum: 103,
                    team: "KB생명",
                    averageEstimation: 4,
                    uri: "https://c.pxhere.com/images/9d/56/fe9d9949f678892a909563be4061-1432871.jpg!d",
                    smartRecommedPoint: 100,
                    comment: "설계의 차이는 곧 경험의 차이.",
                    residentNumber: '746788',
                    sex: 'man',
                    activeArea: 'gyeonggi suwon',
                    career: 'KB손해보험 4년차',
                    phoneNum: '010-3243-4785',
                    certificateemail:'wwjinny44@gmail.com',
                    carPoint : 45,
                    babyPoint : 13,
                    savePoint : 330,
                    guaranteePoint :75,
                    coin : 1230
                },
                {
                    id: 'planner3',
                    name: "박성준",
                    startDay: "16.03.16", //설계사 등록일
                    clientNum: 384,
                    team: "HICompany",
                    averageEstimation: 3, //별점
                    uri: "https://c.pxhere.com/images/36/c8/0ba890bb96b1932bcc123815617c-1419061.jpg!d",
                    smartRecommedPoint: 29,
                    comment: "네이버카페 보험전문가. 초심을 잃지 않는 설계사",
                    residentNumber: '567238',
                    sex: 'man',
                    activeArea: 'seoul',
                    career: '메리츠화재 3년차',
                    phoneNum: '010-1345-3346',
                    certificateemail:'qkrtjdwnsl29@gmail.com',
                    carPoint : 254,
                    babyPoint : 99,
                    savePoint : 12,
                    guaranteePoint :430,
                    coin : 2345
                },
                {
                    id: 'planner4',
                    name: "권희상",
                    startDay: "19.01.04", //설계사 등록일
                    clientNum: 3,
                    team: "team29",
                    averageEstimation: 3, //별점
                    uri: "https://c.pxhere.com/images/8c/df/cb62014c0ae743c2b3c601585c67-1432843.jpg!d",
                    smartRecommedPoint: 12,
                    comment: "신입으로 열정 넘치게 ",
                    residentNumber: '985644',
                    sex: 'man',
                    activeArea: 'ulsan',
                    career: '삼성생명 1년차',
                    phoneNum: '010-3424-3455',
                    certificateemail:'gltkddltlek0209@gmail.com',
                    carPoint : 450,
                    babyPoint : 103,
                    savePoint : 30,
                    guaranteePoint :275,
                    coin : 350
                },
                {
                    id: 'planner5',
                    name: "이상아",
                    startDay: "13.02.18", //설계사 등록일
                    clientNum: 62,
                    team: "team29",
                    averageEstimation: 4, //별점
                    uri: "https://images.pexels.com/photos/937483/pexels-photo-937483.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
                    smartRecommedPoint: 45,
                    comment:  "통합재무설계, 보험비교가 강점인 설계사 ",
                    residentNumber: '345764',
                    sex: 'woman',
                    activeArea: 'jeju',
                    career: '메리츠화재 6년차',
                    phoneNum: '010-4234-5465',
                    certificateemail:'leesanga4234@naver.com',
                    carPoint : 15,
                    babyPoint : 256,
                    savePoint : 330,
                    guaranteePoint :75,
                    coin : 755
                },
                {
                    id: 'planner6',
                    name: "김문기",
                    startDay: "17.04.12", //설계사 등록일
                    clientNum: 55,
                    team: "kalon",
                    averageEstimation: 4, //별점
                    uri: "https://images.pexels.com/photos/936593/pexels-photo-936593.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
                    smartRecommedPoint: 1,
                    comment: "고객이 최우선!! .",
                    residentNumber: '191975',
                    sex: 'man',
                    activeArea: 'seoul',
                    career: 'KB손해보험 3년차',
                    phoneNum: '010-7574-3333',
                    certificateemail:'doikdie@gmail.com',
                    carPoint : 65,
                    babyPoint : 13,
                    savePoint : 340,
                    guaranteePoint :72,
                    coin : 2454
                },
                {
                    id: 'planner7',
                    name: "오대현",
                    startDay: "13.01.02", //설계사 등록일
                    clientNum: 600,
                    team: "sky",
                    averageEstimation: 5, //별점
                    uri: "https://images.pexels.com/photos/914472/pexels-photo-914472.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
                    smartRecommedPoint: 32,
                    comment: "다시 또 다시 나는 달린다",
                    residentNumber: '163374',
                    sex: 'man',
                    activeArea: 'seoul',
                    career: '메리츠화재 6년차',
                    phoneNum: '010-1771-6694',
                    certificateemail:'Ohdae@gmail.com',
                    carPoint : 75,
                    babyPoint : 31,
                    savePoint : 33,
                    guaranteePoint :450,
                    coin : 2241
                },
                {
                    id: 'planner8',
                    name: "오상균",
                    startDay: "17.04.02", //설계사 등록일
                    clientNum: 120,
                    team: "HICompany",
                    averageEstimation: 3, //별점
                    uri: "https://images.pexels.com/photos/46246/people-man-model-glasses-46246.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
                    smartRecommedPoint: 35,
                    comment: "아프니까 청춘이다.",
                    residentNumber: '888471',
                    sex: 'man',
                    activeArea: 'seoul',
                    career: '삼성생명 2년차',
                    phoneNum: '010-3354-4112',
                    certificateemail:'sang@gmail.com',
                    carPoint : 345,
                    babyPoint : 13,
                    savePoint : 230,
                    guaranteePoint :45,
                    coin : 42521
                },
                {
                    id: 'planner9',
                    name: "신현우",
                    startDay: "15.03.15", //설계사 등록일
                    clientNum: 541,
                    team: "HICompany",
                    averageEstimation: 2, //별점
                    uri: "https://images.pexels.com/photos/92331/pexels-photo-92331.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
                    smartRecommedPoint: 32,
                    comment: "내가 이끄는 삶.",
                    residentNumber: '365774',
                    sex: 'woman',
                    activeArea: 'seoul',
                    career: 'KB손해보험 4년차',
                    phoneNum: '010-8823-4115',
                    certificateemail:'shin55@gmail.com',
                    carPoint : 421,
                    babyPoint : 78,
                    savePoint : 30,
                    guaranteePoint :57,
                    coin : 23501
                },
                {
                    id: 'planner10',
                    name: '김수현', 
                    startDay: "15.09.10",
                    clientNum: 230,
                    team: 'kalon',
                    averageEstimation: 4,
                    uri: "https://images.pexels.com/photos/991199/pexels-photo-991199.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
                    smartRecommedPoint: 19,
                    comment: "미모도 곧 경쟁력이다.",
                    residentNumber: '349992',
                    sex: 'woman',
                    activeArea: 'seoul',
                    career: 'KB손해보험 4년차',
                    phoneNum: '010-9658-4333',
                    certificateemail:'sooooohyun@gmail.com',
                    carPoint : 54,
                    babyPoint : 443,
                    savePoint : 53,
                    guaranteePoint :95,
                    coin : 547
                },
                {
                    id: 'planner11',
                    name: '임윤경', 
                    startDay: "18.02.06",
                    clientNum: 80,
                    team: 'kalon',
                    averageEstimation: 4,
                    uri: "https://images.pexels.com/photos/863098/pexels-photo-863098.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
                    smartRecommedPoint: 10,
                    comment: "내가 없으면 안되는 곳.",
                    residentNumber: '663541',
                    sex: 'woman',
                    activeArea: 'seoul',
                    career: '메리츠화재 2년차',
                    phoneNum: '010-2221-5541',
                    certificateemail:'yoon13@gmail.com',
                    carPoint : 200,
                    babyPoint : 124,
                    savePoint : 175,
                    guaranteePoint :45,
                    coin : 2100
                },
    
        ];

        for (let i = 0; i < planners.length; i++) {
            planners[i].docType = 'planner';
            await ctx.stub.putState('Planner' + i, Buffer.from(JSON.stringify(planners[i])));
            console.info('Added <--> ', planners[i]);
        }
        console.info('============= END : Initialize Planner Ledger ===========');
    }



    


    async initLedgerContractedInsurance_ss(ctx) {
        console.info('============= START : Initialize Ledger ===========');
        const insurances = [
            {
                UserInsuranceID: 1,
                insuranceId: 1111,
                name: "통합유니버설LTC종신보험",
                startDay: "18.09.02",
                contractor: "김복자",
                insured: "박민지",
                price: "205000",
                insuranceCo: "삼성",
                insurancStock: false,
                userId: 'user1',
                plannerId: 'planner1',
                specialContents: 'detailContents1'
              },
              {
                UserInsuranceID: 2,
                insuranceId: 1112,
                name: "우리아이통합보장보험",
                startDay: "16.05.29",
                contractor: "박민지",
                insured: "이나래",
                price: "132200",
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

    async initLedgerContractedInsurance_mr(ctx) {
        console.info('============= START : Initialize Ledger ===========');
        const insurances = [

            {

                UserInsuranceID: 3,

                insuranceId: 1113,

                name: "New인덱스변액연금보험",

                startDay: "13.02.22",

                contractor: "박현주",

                insured: "박민지",

                price: "103211",

                insuranceCo: "메리츠",

                insurancStock: true,

                userId: 'user1',

                plannerId: 'planner1',

                specialContents: 'detailContents1'

            

              },

              {

                UserInsuranceID: 4,

                insuranceId: 1114,

                name: "KB월지급식 ELS변액연금보험",

                startDay: "13.01.08",

                contractor: "오상균",

                insured: "이명우",

                price: "350000",

                insuranceCo: "메리츠",

                insurancStock: false,

                userId: 'user1',

                plannerId: 'planner1',

                specialContents: 'detailContents1'

              },

              {

                UserInsuranceID: 5,

                insuranceId: 1115,

                name: "KB 국민암보험",

                startDay: "12.12.01",

                contractor: "임현우",

                insured: "조기웅",

                price: "65000",

                insuranceCo: "메리츠",

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



    async initLedgerContractedInsurance_kb(ctx) {
        console.info('============= START : Initialize Ledger ===========');
        const insurances = [
            {
                UserInsuranceID: 6,
                insuranceId: 1116,
                name: "KB 건강+종신보험",
                startDay: "15.11.04",
                contractor: "권혁준",
                insured: "조기웅",
                price: "260000",
                insuranceCo: "국민",
                insurancStock: false,
                userId: 'user1',
                plannerId: 'planner1',
                specialContents: 'detailContents1'
              },
              {
                UserInsuranceID: 7,
                insuranceId: 1117,
                name: "국민 올인원라이프보장보험",
                startDay: "12.11.04",
                contractor: "전연지",
                insured: "오상호",
                price: "98100",
                insuranceCo: "국민",
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
        console.info('============= END : Initialize ContractedInsurance_kb Ledger ===========');
    }

    async initLedgerClaimInsurance_ss(ctx) {
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
        ];

        for (let i = 0; i < claims.length; i++) {
            claims[i].docType = 'claim';
            await ctx.stub.putState('Claim' + i, Buffer.from(JSON.stringify(claims[i])));
            console.info('Added <--> ', claims[i]);
        }
        console.info('============= END : Initialize ClaimInsurance Ledger ===========');
    }


    async initLedgerClaimInsurance_mr(ctx) {
        console.info('============= START : Initialize Ledger ===========');
        const claims = [
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

    async initLedgerClaimInsurance_kb(ctx) {
        console.info('============= START : Initialize Ledger ===========');
        const claims = [
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
              }
        ];

        for (let i = 0; i < claims.length; i++) {
            claims[i].docType = 'claim';
            await ctx.stub.putState('Claim' + i, Buffer.from(JSON.stringify(claims[i])));
            console.info('Added <--> ', claims[i]);
        }
        console.info('============= END : Initialize ClaimInsurance Ledger ===========');
    }




    async initLedgerStocks_ss(ctx) {
        console.info('============= START : Initialize Ledger ===========');
        const stocks = [
            {
                userId: 'user1', 
                name: '가족사랑 암보험',
                image: 'stock.jpg',
                InsuranceCompany: "삼성",
            },
            {
                userId: 'user1', 
                name: '가족사랑 암보험',
                image: 'stock.jpg',
                InsuranceCompany: "삼성",
            },
            {
                userId: 'user1', 
                name: '가족사랑 암보험',
                image: 'stock.jpg',
                InsuranceCompany: "삼성",
            },
            {
                userId: 'user1', 
                name: '가족사랑 암보험',
                image: 'stock.jpg',
                InsuranceCompany: "삼성",
            },
        ];

        for (let i = 0; i < stocks.length; i++) {
            stocks[i].docType = 'stock';
            await ctx.stub.putState('Stock' + i, Buffer.from(JSON.stringify(stocks[i])));
            console.info('Added <--> ', stocks[i]);
        }
        console.info('============= END : Initialize ClaimInsurance Ledger ===========');
    }

    async initLedgerStocks_mr(ctx) {
        console.info('============= START : Initialize Ledger ===========');
        const stocks = [
            {
                userId: 'user1', 
                name: '가족사랑 암보험',
                image: 'stock.jpg',
                InsuranceCompany: "메리츠",
            },
            {
                userId: 'user1', 
                name: '가족사랑 암보험',
                image: 'stock.jpg',
                InsuranceCompany: "메리츠",
            },
            {
                userId: 'user1', 
                name: '가족사랑 암보험',
                image: 'stock.jpg',
                InsuranceCompany: "메리츠",
            },
            {
                userId: 'user1', 
                name: '가족사랑 암보험',
                image: 'stock.jpg',
                InsuranceCompany: "메리츠",
            },
            {
                userId: 'user1', 
                name: '가족사랑 암보험',
                image: 'stock.jpg',
                InsuranceCompany: "메리츠",
            },
        ];

        for (let i = 0; i < stocks.length; i++) {
            stocks[i].docType = 'stock';
            await ctx.stub.putState('Stock' + i, Buffer.from(JSON.stringify(stocks[i])));
            console.info('Added <--> ', stocks[i]);
        }
        console.info('============= END : Initialize ClaimInsurance Ledger ===========');
    }

    async initLedgerStocks_kb(ctx) {
        console.info('============= START : Initialize Ledger ===========');
        const stocks = [
            {
                userId: 'user1', 
                name: 'KB월지급식 ELS변액연금보험',
                image: 'stock.jpg',
                InsuranceCompany: "국민",
            },
            {
                userId: 'user1', 
                name: 'KB 국민암보험',
                image: 'stock.jpg',
                InsuranceCompany: "국민",
            },
            {
                userId: 'user1', 
                name: 'KB 건강+종신보험',
                image: 'stock.jpg',
                InsuranceCompany: "국민",
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
                comment: "이번년도 목표는 이미 이루었습니다. 꼭 한번봐요",
                start: 3,
                uri: "https://fimg2.pann.com/new/download.jsp?FileID=24714962"
                ,boardId: 'planner1'
            },
            {
                username: "yej0424",
                comment: "덕분에 보험료를 줄일 수 있어서 너무 감사합니다.",
                start: 2,
                uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNlxFQC8vg1w3xit2zNNC-AqEiWOc_UFEWyvXPI_s50S22EbuTyw"
                ,boardId: 'planner1'
            },
            {
                username: "skin2nirv",
                comment: "진짜 똑똑하시고 알기쉽게 설명해주셨어요.",
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

    async queryCoin(ctx, carNumber) {
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
    // {
    //     userId: 'user1', 
    //     name: '가족사랑 암보험',
    //     image: 'stock.jpg',
    //     InsuranceCompany: 'Samsung',
    // },
    async createStock(ctx, stockNumber, userId, name, insuranceCompany, image) {
        console.info('============= START : Create Stock ===========');

        const stock = {
            name,
            docType: 'stock',
            userId,
            insuranceCompany,
            image
        };

        await ctx.stub.putState(stockNumber, Buffer.from(JSON.stringify(stock)));
        console.info('============= END : Create Stock ===========');
    }

    // {
    //     accidentName: " 머리아픔 ",
    //     accidentDay: "18.08.21",
    //     requestDay: "170203",
    //     accidentNum: "sdf165s1",
    //     insuranceName: " 김수정",
    //     insuranceCo: "메리츠",
    //     stateReceive: false,
    //     userId: 'user1', 
    //     image: 'insurance.jpg',
    //   }


    async createClaimForInsurance(ctx, claimNumber, accidentName, accidentDay, requestDay, accidentNum, insuranceName, insuranceCo, stateReceive, userId, image) {
        console.info('============= START : Create Claim ===========');

        const claim = {
            accidentName,
            docType: 'claim',
            accidentDay,
            requestDay,
            accidentNum,
            insuranceName,
            insuranceCo,
            stateReceive,
            userId,
            image
        };

        await ctx.stub.putState(claimNumber, Buffer.from(JSON.stringify(claim)));
        console.info('============= END : Create Claim ===========');
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
                return allResults;
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

    async queryAllUserCoins(ctx) {
        const startKey = 'Coin0';
        const endKey = 'Coin999';

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

    async addCoinOwner(ctx, coinNumber, addCoin) {
        console.info('============= START : addCoin ===========');

        const coinAsBytes = await ctx.stub.getState(coinNumber); // get the car from chaincode state
        if (!coinAsBytes || coinAsBytes.length === 0) {
            throw new Error(`${coinNumber} does not exist`);
        }
        const coin = JSON.parse(coinAsBytes.toString());
        coin.coin = coin.coin + addCoin;

        await ctx.stub.putState(coinNumber, Buffer.from(JSON.stringify(coin)));
        console.info('============= END : addCoin ===========');
    }


}

module.exports = FabCar;
