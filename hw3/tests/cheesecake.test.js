var fs = require('fs');

test('test selectEvent', () => 
{
    //Read index.html file into a string
    var html = fs.readFileSync('public/index.html', 'utf8');
    expect(html).toEqual(expect.anything());

    //Put HTML into testing DOM & make sanity check
    document.body.innerHTML = html;
    const $ = require('jquery');
    expect($('h1').html()).toBe("Cheesecake Order Form");
});