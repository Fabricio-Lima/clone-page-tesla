import DefaultOverlayContent from '../DefaultOverlayContent';
import { Container } from './styles';
import ModelsWrapper from '../Model/ModelWrapper';
import ModelSection from '../Model/ModelSection';


const Page: React.FC = () => {
    return (
        <Container>
            <ModelsWrapper>
                <div>
                    {[
                        'model One',
                        'model Two',
                        'model Three',
                        'model For',
                        'model Five',
                        'model Six',
                        'model Seven',

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
            </ModelsWrapper>
        </Container>
    );
};

export default Page;
