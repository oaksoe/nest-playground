import { Controller, Get, Query, Post, Body, Put, Param, Delete } from '@nestjs/common';
import { CreateCatDto } from './create-cat.dto';
import { CatsService } from './cats.service';

@Controller('cats')
export class CatsController {
    constructor(private readonly catsService: CatsService) {}
  /*
    url: http://localhost:3000/cats/
    body: {
	"name": "Cat",
	"age": "2",
	"breed": "Persian"
    }
  */
  @Post()
  create(@Body() createCatDto: CreateCatDto) {
    this.catsService.create(createCatDto);
  }

  // http://localhost:3000/cats?limit=2
  @Get()
  findAll(@Query() query) {
      return this.catsService.findAll();
    // return `This action returns all cats (limit: ${query.limit} items)`;
  }

  // http://localhost:3000/cats/1
  @Get(':id')
  findOne(@Param('id') id: string) {
    return `This action returns a #${id} cat`;
  }

  // http://localhost:3000/cats/1
  @Put(':id')
  update(@Param('id') id: string, @Body() updateCatDto: CreateCatDto) {
    return `This action updates a #${id} cat`;
  }

  // http://localhost:3000/cats/1
  @Delete(':id')
  remove(@Param('id') id: string) {
    return `This action removes a #${id} cat`;
  }
}