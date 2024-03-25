'use client';

import { useRef, useMemo, useState, useEffect, useCallback } from 'react';
import { useSearchParams } from 'next/navigation';
import { useWavesurfer } from '@/utils/customHook';

const WaveTrack = () => {
    const searchParams = useSearchParams();
    const fileName = searchParams.get('audio');
    const containerRef = useRef<HTMLDivElement>(null);

    //dùng useMemo xử lý bug bị re-render nhìu lần làm thay đổi deps của useEffect
    const optionsMemo = useMemo(() => {
        return {
            waveColor: 'rgb(200, 0, 200)',
            progressColor: 'rgb(100, 0, 100)',
            url: `/api?audio=${fileName}`,
        };
    }, []);

    const wavesurfer = useWavesurfer(containerRef, optionsMemo);
    const [isPlaying, setIsPlaying] = useState<boolean>(false);

    useEffect(() => {
        if (!wavesurfer) return;
        setIsPlaying(false);

        const subscriptions = [
            wavesurfer.on('play', () => setIsPlaying(true)),
            wavesurfer.on('pause', () => setIsPlaying(false)),
        ];

        return () => {
            subscriptions.forEach((unsub) => unsub());
        };
    }, [wavesurfer]);

    //on Play button click
    const onPlayClick = useCallback(() => {
        if (wavesurfer) {
            wavesurfer.isPlaying() ? wavesurfer.pause() : wavesurfer.play();
        }
    }, [wavesurfer]);

    return (
        <div>
            <div ref={containerRef}>wave track</div>
            <button onClick={onPlayClick}>
                {isPlaying === true ? 'Pause' : 'Play'}
            </button>
        </div>
    );
};

export default WaveTrack;
