import {StyleSheet} from "react-native";
import colors from "../styles/colors";
import metrics from "../styles/metrics";
import general from "../styles/general";

export default StyleSheet.create({
    itemContainer: {
        backgroundColor: "white",
        borderWidth: 0,
        borderRadius: 6,
        borderColor: '#ddd',
        shadowColor: '#ccc',
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 1,
        flex: 1,
        justifyContent:'space-between',
        padding: 20,
        margin: 20
    },
    routineContainer: {
        flex: 1,
        backgroundColor: 'white'
    },
    tabHeader: {
        paddingBottom: 10,
        paddingLeft: 20,
        paddingTop: 50,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'white'
    },
    empty: {
        margin: 20,
        marginTop: 40,
        flex: 1,
        alignItems: 'center',
    },
    time: {
        flex: 4,
        fontWeight: 'bold',
        fontSize: 24,
        lineHeight: 30
    },

    container: {
        flex: 1,
        backgroundColor: colors.white,
    },
    label: {
        padding: metrics.basePadding / 2
    },
    subHeader: {
        backgroundColor: colors.white,
        width: '100%',
        height: '14%',
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'center',
        padding: metrics.basePadding
    },
    subHeaderTxt: {
        fontSize: 30,
        fontWeight: 'bold'
    },
    headerLeftButton: {
        marginLeft: metrics.baseMargin
    },
    emptyScheduleContainer: {
        marginTop: '50%',
        flexDirection: 'column'
    },
    emptyTxt: {
        fontSize: 18,
        marginTop: metrics.baseMargin,
        alignSelf: 'center'
    },
    emptyImg: {
        width: 74,
        height: 63,
        alignItems: 'center',
        alignSelf: 'center',
        marginLeft: metrics.baseMargin,
        marginRight: metrics.baseMargin,
    },
    emptyButton: {
        backgroundColor: colors.primary,
        alignItems: 'center',
        padding: metrics.basePadding,
        margin: metrics.baseMargin,
        borderRadius: metrics.baseRadius * 2,
    },
    emptyButtonTxt: {
        fontSize: 16,
        color: colors.white,
    },
    intentionContainer: {
        flexDirection: 'column',
        marginTop: metrics.baseMargin
    },
    box: {
        ...general.box,
        marginHorizontal: 0,
        paddingHorizontal: 0,
        flexDirection: 'column',
        marginTop: metrics.baseMargin,
        padding: metrics.basePadding,
        backgroundColor: colors.white,
        borderRadius: metrics.baseRadius * 4,
        borderColor: colors.black,
        shadowColor: colors.dark,
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.2,
        elevation: 1,
    },
    intentionDate: {
        fontSize: 18,
        marginLeft: '25%',
        marginTop: metrics.baseMargin
    },
    intentionTop: {
        justifyContent: 'space-between',
        flexDirection: 'row',
        padding: metrics.basePadding
    },
    intentionTopTxt: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    intentionTxt: {
        padding: metrics.basePadding
    },
    intentionBoxAddress: {
        flexDirection: 'row',
    },
    intentionAddressIcon: {
        flexDirection: 'column',
        padding: metrics.basePadding
    },
    intentionAddressInfo: {
        justifyContent: 'space-between',
        flexDirection: 'column',
    },
    intentionAddressInitial: {
        marginTop: metrics.baseMargin + 5
    },
    intentionAddressFinal: {
        marginBottom: metrics.baseMargin * 2
    },
    intentionAddressPath: {
        color: colors.primary,
        marginLeft: metrics.baseMargin - 6.5

    },
    intentionBoxTime: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: metrics.basePadding
    },
    intentionBoxTimeTxt: {
        marginLeft: metrics.baseMargin
    },
    intentionButton: {
        backgroundColor: colors.primary,
        alignItems: 'center',
        borderRadius: metrics.baseRadius * 2,
        marginLeft: '10%',
        marginRight: '10%',
    },
    intentionButtonTxt: {
        fontSize: 18,
        marginTop: metrics.baseMargin,
        color: colors.white,

    },
    boxPassenger: {
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
    },
    passengerTitle: {
        fontSize: 18,
        padding: metrics.basePadding / 2
    },
    imgUser: {
        width: 50,
        height: 50
    },
    // itemWrapper: {
    //     borderRadius: metrics.baseRadius * 5,
    //     marginTop: metrics.baseMargin,
    //     marginLeft: metrics.baseMargin,
    //     marginRight: metrics.baseMargin,
    //     backgroundColor: colors.white,
    //     borderWidth: 1,
    //     borderColor: colors.secundary,
    //     borderBottomWidth: 0,
    //     shadowColor: colors.regular,
    //     shadowOffset: {width: 0, height: 2},
    //     shadowOpacity: 0.2,
    //     shadowRadius: 2,
    //     elevation: 1,
    // },
    itemHeader: {
        textAlign: 'left',
        fontSize: 18,
        margin: metrics.baseMargin + 2,
        fontWeight: 'bold',
        color: colors.regular,
        marginRight: 4,
        justifyContent: 'center',
    },
    itemHeaderDay: {
        margin: 4,
        marginTop: metrics.baseMargin + 6,
        color: colors.dark,
    }
});
