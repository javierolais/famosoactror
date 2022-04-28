import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { getActorName } from '../helpers/UseFetch';
import 'antd/dist/antd.css';
import { Button } from 'antd';
import './Upload.css';
import { ArrowLeftOutlined, StarOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';


export const WhoIs = () => {
    //Cachamos y destructuramos el actorName con el useParams;
    const { actorName } = useParams();
    const [actor, setActor] = useState({
        validador: false,
        data: []
    }); //Hook para renderizar el JSX con las características del actor seleccionado;

    const navigate = useNavigate();

    useEffect(() => {
        const actorSelected = async () => {
            try {
                const resultActor = await getActorName(actorName);
                setActor({ validador: true, data: resultActor });
                console.log(resultActor);
            }
            catch (error) {
                console.log(error);
            }
        }

        actorSelected();
    }, [actorName]);

    const handleReset = () => {
        navigate('/'); //Regresamos a la pantalla para elegir una nueva imagen de un actor famoso;
    }

    const { validador, data } = actor;

    return (
        <div className="container">

            {
                validador && (

                    <>
                        <div className="item item1" style={{ borderRight: 'solid 1px black' }}>
                            <div>
                                <div>
                                    <Button type="primary" icon={<ArrowLeftOutlined />} style={{ marginTop: '6px', marginLeft: '8px' }} onClick={handleReset} >Regresar </Button>
                                    {/* <Divider /> */}
                                </div>
                                <img
                                    src={`https://image.tmdb.org/t/p/w500/${data[0].profile_path}`}
                                    style={{ width: '100px', objectFit: 'contain', paddingTop: '13px', paddingLeft: '0px', marginLeft: '8px' }}
                                />
                                <p style={{ paddingLeft: '19px' }}> {data[0].name} </p>
                                <p style={{ paddingLeft: '19px', backgroundColor: '#F8D88F', width: '89px', marginLeft: '12px' }}> {data[0].gender === 2 ? 'Hombre' : 'Mujer'} </p>
                                <p style={{ paddingLeft: '19px' }}>Popularidad: {data[0].popularity}</p>
                            </div>
                        </div>
                        <div className="item item2">
                            <h3> Películas </h3>
                            {
                                data[0].known_for.map((actor, index) => {
                                    return (
                                        <div key={index}>
                                            <hr style={{ backgroundColor: '#1890FF !important' }} />
                                            <div className="average">
                                                <p> {actor.title}</p>
                                                <p>
                                                    {actor.vote_average}/10
                                                    <StarOutlined style={{ color: '#FEB611' }} />
                                                </p>
                                            </div>
                                            <div style={{ display: 'flex' }}>
                                                <p>
                                                    <img
                                                        src={`https://image.tmdb.org/t/p/w500/${actor.poster_path}`}
                                                        style={{ width: '70px' }}
                                                    />
                                                </p>
                                                <p style={{ paddingLeft: '10px' }}>
                                                    {actor.overview}
                                                </p>
                                            </div>

                                            <label style={{ fontWeight: 'bold' }}> Fecha de estreno: {actor.release_date} </label>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </>
                )
            }
        </div >
    );

}
