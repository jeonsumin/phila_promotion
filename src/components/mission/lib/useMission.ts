import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {fetchStamp} from "entities/stamp";

export const useMission = () => {

    const {stamp, isLoading} = useSelector((state: RootState) => state.stamp);
    const dispatch: AppDispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchStamp())

    }, [dispatch]);

    return {stamp}
}