var fs = require('fs');

test('test selectEvent', () => 
{
    //Read index.html file into a string
    var html = fs.readFileSync('public/javascripts/Website/nillo22CS341HW1.htm', 'utf8');
    expect(html).toEqual(expect.anything());

    //Put HTML into testing DOM & make sanity check
    document.body.innerHTML = html;
    const $ = require('jquery');
    expect($('h1').html()).toBe("Cheesecake Order Form");
});