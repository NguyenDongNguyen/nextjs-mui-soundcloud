'use client';
import WaveTrack from '@/components/track/wave.track';
import { Container } from '@mui/material';
import { useSearchParams } from 'next/navigation';

const DetailTrackPage = (props: any) => {
    const { params } = props;

    const searchParams = useSearchParams();

    const search = searchParams.get('audio');
    console.log('🚀 ~ DetailTrackPage ~ search:', search);
    return (
        <Container>
            <div>
                <WaveTrack />
            </div>
        </Container>
    );
};

export default DetailTrackPage;
