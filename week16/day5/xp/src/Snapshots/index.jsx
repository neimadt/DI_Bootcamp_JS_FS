import { connect } from 'react-redux';
import { useEffect } from 'react';
import { getPhotos } from '../api';
import { putSnapshots, startFetchSnapshots, stopFetchSnapshots } from '../store/slice';


const _ = ({ snapshots, gettingSnapshots, put, start, stop }) => {

    const fetchSnapshots = async () => {

        start();
        const { photos: snapshots } = await getPhotos();

        put(snapshots, true);
        stop();
    };

    useEffect(() => {

        fetchSnapshots();
    }, []);

    if (gettingSnapshots) {

        return (
            <h2 className="text-center text-orange-700 text-2xl mt-4">
                Please wait...
            </h2>
        );
    }

    return (
        <>
            <div className="flex justify-center py-3">
                <button
                    onClick={fetchSnapshots}
                    className="bg-red-500 px-3 py-2 rounded-md text-white transition-colors duration-200 ease-in-out hover:bg-red-700">
                    Refresh
                </button>
            </div>
            <ul>
                {
                    snapshots.map(s => (
                        <li key={s.id}>
                            <img src={s.src.medium} />
                        </li>
                    ))
                }
            </ul>
        </>
    );
};

const mapStateToProps = ({ photos: { snapshots, gettingSnapshots } }) => {

    return { snapshots, gettingSnapshots };
};

const mapDispatchToProps = (dispatch) => {

    return {
        put: (snapshots, clear) => {
            dispatch(putSnapshots({ snapshots, clear }));
        },
        start: () => dispatch(startFetchSnapshots()),
        stop: () => dispatch(stopFetchSnapshots())
    };
};

export const Snapshots = connect(mapStateToProps, mapDispatchToProps)(_);
