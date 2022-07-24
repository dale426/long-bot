// 扫码、生成二维码
import { WechatyBuilder, Contact, Message, ScanStatus } from 'wechaty'
import qt from 'qrcode-terminal'

export function onScan(qrcode: string, status: ScanStatus) {
    if (status === ScanStatus.Waiting || status === ScanStatus.Timeout) {
        qt.generate(qrcode, { small: true }); // 在console端显示二维码
        
        const qrcodeImageUrl = [
            'https://api.qrserver.com/v1/create-qr-code/?data=',
            encodeURIComponent(qrcode),
        ].join('');
        
        console.log(ScanStatus[status], status, qrcodeImageUrl)
    } else {
        console.log(ScanStatus[status], status)
    }
}