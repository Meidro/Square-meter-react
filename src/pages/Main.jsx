import {useForm} from 'react-hook-form'
import {useDispatch, useSelector} from 'react-redux'
import {Preloader} from '../components/Preloader'
import {Filter} from '../components/Filter'
import {setFilterParams, setFilterObjects} from '../redux/filterReducer'
import {setObjects} from '../redux/objectsReducer'
import {getParamsString} from '../utils/getParamsString'
import {getTextBtnCorrect} from '../utils/getTextBtnCorrect'
import {API} from '../api/api'
import {Objects} from '../components/Objects'
import {splitByThree} from '../utils/splitByThree'
import {useEffect} from 'react'
import {Options} from '../components/Options'

export const Main = () => {
    console.log('render Main')

    const dispatch = useDispatch()
    const params = useSelector((state) => state.filter.params)
    const filterObjects = useSelector((state) => state.filter.filterObjects)
    const objects = useSelector((state) => state.list.objects)
    const objectsCount = filterObjects?.length
    const {register, handleSubmit, watch, reset} = useForm()
    const onSubmit = () => {
        dispatch(setObjects(filterObjects))
    }

    const runObjectsQuery = async (value) => {
        const objectsArray = await API.getObjects(getParamsString(value))
        dispatch(setFilterObjects(objectsArray))
        !value && dispatch(setObjects(objectsArray))
    }

    useEffect(async () => {
        const paramsObject = await API.getFilterParams()
        dispatch(setFilterParams(paramsObject))

        runObjectsQuery()

        watch(async (value) => {
            console.log('ИЗМЕНЕНИЯ ФОРМЫ')
            runObjectsQuery(value)
        })
    }, [])

    if (!params) return <Preloader />

    return (
        <>
            <Filter
                params={params}
                register={register}
                handleSubmit={handleSubmit}
                onSubmit={onSubmit}
                objectsCount={objectsCount}
                reset={reset}
                getTextBtnCorrect={getTextBtnCorrect}
            />
            <Options />
            <Objects splitByThree={splitByThree} objects={objects} />
        </>
    )
}
