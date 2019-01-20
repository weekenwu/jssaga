import watchHeadSaga from  './saga/headsaga';

export default function* rootSaga() {
    yield [watchHeadSaga()]
}