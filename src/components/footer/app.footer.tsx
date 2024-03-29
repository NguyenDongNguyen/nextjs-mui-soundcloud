'use client';
import { useTrackContext } from '@/lib/track.wrapper';
import { useHasMounted } from '@/utils/customHook';
import { Container } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';

const AppFooter = () => {
    const hasMounted = useHasMounted();

    // xử lý nếu pre-render ở server thì render ra fragment
    if (!hasMounted) return <></>; //fragment

    const { currentTrack, setCurrentTrack } = useTrackContext() as ITrackContext;
    console.log('🚀 ~ AppFooter ~ currentTrack:', currentTrack);

    return (
        <div style={{ marginTop: 50 }}>
            <AppBar
                position="fixed"
                sx={{
                    top: 'auto',
                    bottom: 0,
                    background: '#f2f2f2',
                }}
            >
                <Container
                    sx={{
                        display: 'flex',
                        gap: 10,
                        '.rhap_main': {
                            gap: '30px',
                        },
                    }}
                >
                    <AudioPlayer
                        layout="horizontal-reverse"
                        src={`${process.env.NEXT_PUBLIC_BACKEND_URL}/tracks/hoidanit.mp3`}
                        volume={0.5}
                        style={{
                            boxShadow: 'unset',
                            background: '#f2f2f2',
                        }}
                    />
                    <div
                        style={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'start',
                            justifyContent: 'center',
                            minWidth: 100,
                        }}
                    >
                        <div style={{ color: '#ccc' }}>Nguyen</div>
                        <div style={{ color: 'black' }}>Who am I ?</div>
                    </div>
                </Container>
            </AppBar>
        </div>
    );
};

export default AppFooter;
