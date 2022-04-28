import React, { useState } from 'react';
import 'antd/dist/antd.css';
import { Upload, message } from 'antd';
import { InboxOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import './Archive.css';
import { Alert, Typography } from 'antd';
import { PropsArchive } from './PropsArchive';


export const UploadArchive = () => {
    const { archive, Props } = PropsArchive();
    const { Dragger } = Upload;
    // const { Paragraph } = Typography;


    return (
        <div className="archive">
            {
                archive.error && (
                    <Alert
                        message="Upload Error"
                        description={archive.mensaje}
                        type="error"
                    />
                )
            }
            <Dragger {...Props}>
                <p className="ant-upload-drag-icon" style={{ display: 'flex', flexDirection: 'column' }}>
                    <div style={{ fontSize: '50px' }}>¿Quién es este actor?</div>
                    <InboxOutlined />
                </p>
                <p className="ant-upload-text">
                    Haz click o arrastra una imagen
                </p>
                <p className="ant-upload-hint">
                    Selecciona la foto de un actor famoso para conocer quien es y en qué películas ha salido.
                </p>
            </Dragger>
        </div>
    )
}