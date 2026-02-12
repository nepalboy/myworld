import { useEffect } from 'react';

interface AdUnitProps {
    slot: string;
    format?: 'auto' | 'fluid' | 'rectangle';
    responsive?: 'true' | 'false';
    style?: React.CSSProperties;
}

/**
 * Reusable Google AdSense Ad Unit component for myworld.
 */
const AdUnit = ({ slot, format = 'auto', responsive = 'true', style }: AdUnitProps) => {
    useEffect(() => {
        try {
            // @ts-ignore
            (window.adsbygoogle = window.adsbygoogle || []).push({});
        } catch (e) {
            console.error('AdSense error:', e);
        }
    }, []);

    return (
        <div style={{ margin: '-20px 0', textAlign: 'center', ...style }}>
            <ins
                className="adsbygoogle"
                style={{ display: 'block' }}
                data-ad-client="ca-pub-4543555000395830"
                data-ad-slot={slot}
                data-ad-format={format}
                data-full-width-responsive={responsive}
            />
        </div>
    );
};

export default AdUnit;
