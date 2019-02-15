import colors from './colors';
import metrics from './metrics';

export default {
    box: {
        backgroundColor: colors.white,
        borderRadius: metrics.baseRadius,
        padding: metrics.basePadding / 2
    },
    card: {
        backgroundColor: colors.white,
        borderColor: colors.light,
        shadowColor: colors.regular,
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 1,
        flex: 1,
        padding: metrics.basePadding
    },
    header:{
        paddingBottom: metrics.basePadding,
        paddingTop: 50,
        paddingLeft: metrics.basePadding * 2,
        alignItems: 'center',
        flexDirection: 'row'
    },
    headerText: {
        fontSize: 32,
        fontWeight: 'bold'
    },
    safeArea: {
        flex: 1,
        backgroundColor: colors.white,
        flexDirection: 'column',
    },
}
