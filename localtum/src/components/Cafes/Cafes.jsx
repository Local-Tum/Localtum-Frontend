import eckhaus from '../../assets/images/cafes/eckhaus.png';
import docking from '../../assets/images/cafes/docking.png';
import minimale from '../../assets/images/cafes/minimale.png';
import jansang from '../../assets/images/cafes/jansang.png';
import simon from '../../assets/images/cafes/simon.png';
import moho from '../../assets/images/cafes/moho.png';
import terresdecafe from '../../assets/images/cafes/terresdecafe.png';
import breeze from '../../assets/images/cafes/breeze.png';
import lilyblanc from '../../assets/images/cafes/lilyblanc.png';
import secondbress from '../../assets/images/cafes/secondbress.png';

// 메뉴 이미지
import coldbrew from '../../assets/images/menu/eckhaus/coldbrew.png';
import cappuccino from '../../assets/images/menu/eckhaus/cappuccino.png';
import flatwhite from '../../assets/images/menu/eckhaus/flatwhite.png';
import housedolce from '../../assets/images/menu/eckhaus/housedolce.png';
import einspanner from '../../assets/images/menu/eckhaus/einspanner.png';
import caffelatte from '../../assets/images/menu/eckhaus/caffelatte.png';
import housematcha from '../../assets/images/menu/eckhaus/housematcha.png';
import americano from '../../assets/images/menu/eckhaus/americano.png';
import housechoco from '../../assets/images/menu/eckhaus/housechoco.png';
import vanillalatte from '../../assets/images/menu/eckhaus/vanillalatte.png';
import housecream from '../../assets/images/menu/eckhaus/housecream.png';
import nonhousematcha from '../../assets/images/menu/eckhaus/nonhousematcha.png';
import milktea from '../../assets/images/menu/eckhaus/milktea.png';
import strawberrypassionfrutes from '../../assets/images/menu/eckhaus/strawberrypassionfrutes.png';
import nonhousechoco from '../../assets/images/menu/eckhaus/nonhousechoco.png';
import appleyuja from '../../assets/images/menu/eckhaus/appleyuja.png';
import raspberrymilk from '../../assets/images/menu/eckhaus/raspberrymilk.png';
import blackcurrenthallabong from '../../assets/images/menu/eckhaus/blackcurrenthallabong.png';

const Cafes = [
    {
        id: 1, name: '에크하우스', address: '서울 서초구 강남대로8길 15-1 1층', image: eckhaus, latitude: 37.46812105363802, longitude: 127.04170329924155,
        hours: {
            mon: { open: '08:00', close: '23:00', lastOrder: '22:30' },
            tue: { open: '08:00', close: '23:00', lastOrder: '22:30' },
            wed: { open: '08:00', close: '23:00', lastOrder: '22:30' },
            thu: { open: '08:00', close: '23:00', lastOrder: '22:30' },
            fri: { open: '08:00', close: '23:00', lastOrder: '22:30' },
            sat: { open: '09:00', close: '22:00', lastOrder: '21:30' },
            sun: { open: '09:00', close: '20:00', lastOrder: '19:30' }
        },
        menu: [
            { name: '콜드브루', image: coldbrew, price: '4000' },
            { name: '카푸치노', image: cappuccino, price: '4300' },
            { name: '플랫화이트', image: flatwhite, price: '4300' },
            { name: '하우스 돌체', image: housedolce, price: '5000' },
            { name: '아인슈페너', image: einspanner, price: '5300' },
            { name: '카페라떼', image: caffelatte, price: '4300' },
            { name: '하우스 말차', image: housematcha, price: '5000' },
            { name: '아메리카노', image: americano, price: '3500' },
            { name: '하우스 초코', image: housechoco, price: '5000' },
            { name: '바닐라라떼', image: vanillalatte, price: '4800' },
            { name: '하우스 크림', image: housecream, price: '5500' },
            { name: '[NON] 하우스 말차', image: nonhousematcha, price: '5000' },
            { name: '밀크티', image: milktea, price: '5000' },
            { name: '딸기-패션후르츠', image: strawberrypassionfrutes, price: '4800' },
            { name: '[NON] 하우스 초코', image: nonhousechoco, price: '5000' },
            { name: '사과-유자', image: appleyuja, price: '4800' },
            { name: '라즈베리 밀크', image: raspberrymilk, price: '5000' },
            { name: '블랙커런트-한라봉', image: blackcurrenthallabong, price: '4800' }
        ]
    },
    { id: 2, name: '카페도킹', address: '서울 서초구 동산로19길 54 1층 카페도킹', status: 'closed', image: docking, latitude: 37.47496725281195, longitude: 127.04570461757694,
        hours: {
            mon: { open: '10:00', close: '23:00', lastOrder: '23:00' },
            tue: { open: '10:00', close: '23:00', lastOrder: '23:00' },
            wed: { open: '10:00', close: '23:00', lastOrder: '23:00' },
            thu: { open: '10:00', close: '23:00', lastOrder: '23:00' },
            fri: { open: '10:00', close: '23:00', lastOrder: '23:00' },
            sat: { open: '12:00', close: '22:00', lastOrder: '22:00' },
            sun: { open: '12:00', close: '21:00', lastOrder: '21:00' }
        }
     },
    { id: 3, name: '미니말레 커피뢰스터 양재본점', address: '서울 서초구 강남대로10길 32', status: 'open', image: minimale, latitude: 37.485453417967605, longitude: 127.02755233466328,
        hours: {
            mon: { open: '08:00', close: '19:00', lastOrder: '19:00' },
            tue: { open: '08:00', close: '19:00', lastOrder: '19:00' },
            wed: { open: '08:00', close: '19:00', lastOrder: '19:00' },
            thu: { open: '08:00', close: '19:00', lastOrder: '19:00' },
            fri: { open: '08:00', close: '19:00', lastOrder: '19:00' },
            sat: { open: '09:00', close: '19:00', lastOrder: '19:00' },
            sun: { open: '09:00', close: '19:00', lastOrder: '19:00' }
        }
     },
    { id: 4, name: '잔상', address: '서울 서초구 언남1길 3 1층', status: 'closed', image: jansang, latitude: 37.47221198488724, longitude: 127.04071979576193, 
        hours: {
            mon: { open: '08:00', close: '18:00', lastOrder: '18:00' },
            tue: { open: '08:00', close: '18:00', lastOrder: '18:00' },
            wed: { open: '08:00', close: '21:00', lastOrder: '21:00' },
            thu: { open: '08:00', close: '21:00', lastOrder: '21:00' },
            fri: { open: '08:00', close: '21:00', lastOrder: '21:00' },
            sat: { open: '12:00', close: '21:00', lastOrder: '21:00' },
            sun: { open: '12:00', close: '18:00', lastOrder: '18:00' }
        }
    },
    { id: 5, name: '심온', address: '서울 서초구 양재천로 103-3 1층 심온', status: 'open', image: simon, latitude: 37.476591150430906, longitude: 127.03996696872213,
        hours: {
            mon: { open: '12:00', close: '22:00', lastOrder: '21:30' },
            tue: { open: '12:00', close: '22:00', lastOrder: '21:30' },
            wed: { open: '12:00', close: '22:00', lastOrder: '21:30' },
            thu: { open: '12:00', close: '22:00', lastOrder: '21:30' },
            fri: { open: '12:00', close: '22:00', lastOrder: '21:30' },
            sat: { open: '12:00', close: '22:00', lastOrder: '21:30' },
            sun: { open: '12:00', close: '22:00', lastOrder: '21:30' }
        }
     },
    { id: 6, name: '카페모호', address: '서울 서초구 양재천로7길 1 1층', status: 'closed', image: moho, latitude: 37.474296633325366, longitude: 127.03606323065677,
        hours: {
            mon: { open: '08:00', close: '17:00', lastOrder: '17:00' },
            tue: { open: '08:00', close: '17:00', lastOrder: '17:00' },
            wed: { open: '08:00', close: '17:00', lastOrder: '17:00' },
            thu: { open: '08:00', close: '17:00', lastOrder: '17:00' },
            fri: { open: '08:00', close: '17:00', lastOrder: '17:00' },
            sat: { open: '08:00', close: '19:00', lastOrder: '19:00' },
            sun: { open: '08:00', close: '19:00', lastOrder: '19:00' }
        }
     },
    { id: 7, name: '떼르드카페 양재점', address: '서울 서초구 양재천로 111 1층', status: 'open', image: terresdecafe, latitude: 37.47728644844788, longitude: 127.04079038215471,
        hours: {
            mon: { open: '09:00', close: '20:00', lastOrder: '19:30' },
            tue: { open: '09:00', close: '20:00', lastOrder: '19:30' },
            wed: { open: '09:00', close: '20:00', lastOrder: '19:30' },
            thu: { open: '09:00', close: '20:00', lastOrder: '19:30' },
            fri: { open: '09:00', close: '20:00', lastOrder: '19:30' },
            sat: { open: '09:00', close: '20:00', lastOrder: '19:30' },
            sun: { open: '09:00', close: '20:00', lastOrder: '19:30' }
        }
     },
    { id: 8, name: '브리즈커피', address: '서울 서초구 마방로 2 가인빌딩 1층 브리즈커피', status: 'closed', image: breeze, latitude: 37.4786666078908, longitude: 127.02926379380902,
        hours: {
            mon: { open: '10:00', close: '22:00', lastOrder: '22:00' },
            tue: { open: '10:00', close: '22:00', lastOrder: '22:00' },
            wed: { open: '10:00', close: '22:00', lastOrder: '22:00' },
            thu: { open: '10:00', close: '22:00', lastOrder: '22:00' },
            fri: { open: '10:00', close: '22:00', lastOrder: '22:00' },
            sat: { open: '10:00', close: '22:00', lastOrder: '22:00' },
            sun: { open: '10:30', close: '21:00', lastOrder: '21:00' }
        }
     },
    { id: 9, name: '카페릴리블랑', address: '서울 서초구 양재천로19길 52 우리빌딩 1층', status: 'open', image: lilyblanc, latitude: 37.47761890209947, longitude: 127.03814957751489,
        hours: {
            mon: { open: '08:00', close: '22:00', lastOrder: '22:00' },
            tue: { open: '08:00', close: '22:00', lastOrder: '22:00' },
            wed: { open: '08:00', close: '22:00', lastOrder: '22:00' },
            thu: { open: '08:00', close: '22:00', lastOrder: '22:00' },
            fri: { open: '08:00', close: '22:00', lastOrder: '22:00' },
            sat: { open: '10:00', close: '22:00', lastOrder: '22:00' },
            sun: null // 정기 휴무
        }
     },
    { id: 10, name: '세컨브레스', address: '서울 서초구 양재천로 95-2 1층', status: 'closed', image: secondbress, latitude: 37.47609747043354, longitude: 127.03974964293364,
        hours: {
            mon: { open: '10:00', close: '24:00', lastOrder: '23:30' },
            tue: { open: '10:00', close: '24:00', lastOrder: '23:30' },
            wed: { open: '10:00', close: '24:00', lastOrder: '23:30' },
            thu: { open: '10:00', close: '24:00', lastOrder: '23:30' },
            fri: { open: '10:00', close: '24:00', lastOrder: '23:30' },
            sat: { open: '10:00', close: '24:00', lastOrder: '23:30' },
            sun: { open: '10:00', close: '24:00', lastOrder: '23:30' }
        }
     }
];

export default Cafes;
