import DefaultOverlayContent from '../DefaultOverlayContent';
import { Container } from './styles';
import ModelsWrapper from '../Model/ModelWrapper';
import ModelSection from '../Model/ModelSection';
import UniqueOverlay from '../UniqueOverlay';


const Page: React.FC = () => {
    return (
        <Container>
            <ModelsWrapper>
                <div>
                    {[
                        'Model S',
                        'Model Y',
                        'Model 3',
                        'Model X'

                    ].map(modelName =>  (
                        <ModelSection 
                            className='colored'
                            modelName={modelName}
                            overlayNode={
                                <DefaultOverlayContent
                                    label={modelName}
                                    description='Order Online for Delivery'
                                />
                            }
                        />
                    ))}
                </div>
                <UniqueOverlay />
            </ModelsWrapper>
        </Container>
    );
};

export default Page;
