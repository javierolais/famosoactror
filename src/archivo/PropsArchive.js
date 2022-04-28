import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { message } from 'antd';
//redux;
import { setReduxActor } from '../store/slices/actor';
import { useDispatch } from 'react-redux';

export const PropsArchive = () => {

    const navigate = useNavigate();

    const dispatch = useDispatch();

    const [archive, setArchive] = useState({
        error: false,
        mensaje: ''
    });
    
    const Props = {
        name: 'file',
        headers: {
            Nomada: "ZjQ4NmJjYWQtODBmZS00Zjk4LWEwODMtMDQ2YzIyYTZiZWQx"
        },
        action: 'https://whois.nomada.cloud/upload',
        onChange(info) {
            const { status } = info.file;
    
            if (status === 'done') 
            {
                message.success(`${info.file.name} file uploaded successfully.`);
                //Mandar a llamar el navigate para dirigirnos a la pantalla del actor seleccionado;
                const { response } = info.file;
                dispatch(setReduxActor(response));
                if (response.error === '') 
                {
                    navigate(`/actor/${response.actorName}`); //Success y navegamos a la pantalla con la lista de actor con sus películas;
                }
                else 
                { //Si la propiedad error es != a '' es porque ocurrió un error controlado;
                    setArchive({
                        error: true,
                        mensaje: response.error
                    });
                }
            }
            else if (status === 'error') 
            {
                message.error(`${info.file.name} ha fallado al subirse. Favor de intentarlo de nuevo o comunicarse con el equipo de soporte!.`);
            }
        },
        onDrop(e) {
            e.preventDefault();
            console.log('Dropped files', e.dataTransfer.files);
        }
    }

    return {
        archive,
        Props
    }
}


