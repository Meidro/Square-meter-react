import {useForm} from 'react-hook-form'
import {useDispatch, useSelector} from 'react-redux'
import {Preloader} from '../components/Preloader'
import {Filter} from '../components/Filter'
import {setFilterParams, setFilterObjects} from '../redux/filterReducer'
import {setObjects} from '../redux/objectsReducer'
import {getParamsString} from '../utils/getParamsString'
import {getTextBtnCorrect} from '../utils/getTextBtnCorrect'
import {API} from '../api/api'
import {splitByThree} from '../utils/splitByThree'
import {useEffect} from 'react'
import {Options} from '../components/Options'
import {ObjectsList} from '../components/ObjectsList'
import {ObjectsTable} from '../components/ObjectsTable'

export const Main = () => {
    const dispatch = useDispatch()
    const filter = useSelector((state) => state.filter)
    const list = useSelector((state) => state.list)
    const objectsCount = filter.filterObjects?.length
    const {register, handleSubmit, watch, reset} = useForm()

    const onSubmit = () => dispatch(setObjects(filter.filterObjects))

    const onReset = (e) => {
        e.preventDefault()
        reset()
    }

    const runObjectsQuery = async (value) => {
        const objectsArray = await API.getObjects(getParamsString(value))
        dispatch(setFilterObjects(objectsArray))
        if (!value || !Object.keys(value).length) dispatch(setObjects(objectsArray))
    }

    useEffect(async () => {
        const paramsObject = await API.getFilterParams()
        dispatch(setFilterParams(paramsObject))

        runObjectsQuery()

        watch(async (value) => {
            runObjectsQuery(value)
        })
    }, [])

    if (!filter.params) return <Preloader />

    return (
        <>
            <Filter
                params={filter.params}
                register={register}
                handleSubmit={handleSubmit}
                onSubmit={onSubmit}
                objectsCount={objectsCount}
                onReset={onReset}
                getTextBtnCorrect={getTextBtnCorrect}
            />
            <Options />
            <ObjectsTable splitByThree={splitByThree} objects={list.objects} isList={list.isList} />
            <ObjectsList splitByThree={splitByThree} objects={list.objects} isList={list.isList} />
        </>
    )
}
