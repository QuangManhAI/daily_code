import {Body, Controller, Post} from '@nestjs/common';
import { TransactionsService } from './transactions.service';
import { BorrowCopyDto } from './dto/borrow-copy.dto';
import { ReturnCopyDto } from './dto/return-copy.dto';

@Controller('transaction')
export class TransactionsController {
    constructor(private readonly svc: TransactionsService){}

    @Post('borrow')
    borrow(@Body() dto: BorrowCopyDto) {
        return this.svc.borrowerCopy(dto);
    }

    @Post('return')
    return(@Body() dto: ReturnCopyDto) {
        return this.svc.returnCopy(dto);
    }

    @Post('mark-lost')
    markLost(@Body('transactionId') id: string) {
        return this.svc.markLost(id);
    }

}