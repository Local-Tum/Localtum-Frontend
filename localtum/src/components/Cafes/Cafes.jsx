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

const Cafes = [
    { id: 1, name: '에크하우스', address: '서울 서초구 강남대로8길 15-1 1층', status: 'open', image: eckhaus, latitude: 37.46812105363802, longitude: 127.04170329924155 },
    { id: 2, name: '카페도킹', address: '서울 서초구 동산로19길 54 1층 카페도킹', status: 'closed', image: docking, latitude: 37.47496725281195, longitude: 127.04570461757694 },
    { id: 3, name: '미니말레 커피뢰스터 양재본점', address: '서울 서초구 강남대로10길 32', status: 'open', image: minimale, latitude: 37.485453417967605, longitude: 127.02755233466328 },
    { id: 4, name: '잔상', address: '서울 서초구 언남1길 3 1층', status: 'closed', image: jansang, latitude: 37.47221198488724, longitude: 127.04071979576193 },
    { id: 5, name: '심온', address: '서울 서초구 양재천로 103-3 1층 심온', status: 'open', image: simon, latitude: 37.476591150430906, longitude: 127.03996696872213 },
    { id: 6, name: '카페모호', address: '서울 서초구 양재천로7길 1 1층', status: 'closed', image: moho, latitude: 37.474296633325366, longitude: 127.03606323065677 },
    { id: 7, name: '떼르드카페 양재점', address: '서울 서초구 양재천로 111 1층', status: 'open', image: terresdecafe, latitude: 37.47728644844788, longitude: 127.04079038215471 },
    { id: 8, name: '브리즈커피', address: '서울 서초구 마방로 2 가인빌딩 1층 브리즈커피', status: 'closed', image: breeze, latitude: 37.4786666078908, longitude: 127.02926379380902 },
    { id: 9, name: '카페릴리블랑', address: '서울 서초구 양재천로19길 52 우리빌딩 1층', status: 'open', image: lilyblanc, latitude: 37.47761890209947, longitude: 127.03814957751489 },
    { id: 10, name: '세컨브레스', address: '서울 서초구 양재천로 95-2 1층', status: 'closed', image: secondbress, latitude: 37.47609747043354, longitude: 127.03974964293364 }
];

export default Cafes;
