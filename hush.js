var husher = {
    hush: function() {
        var labels = ["Calendar", "HS Community"];

        for (var lCounter = 0; lCounter < labels.length; ++lCounter) {
            this.hushForLabel(labels[lCounter]);
        }
        
    },
    
    hushForLabel: function(label) {
        // Find all elements with the Calendar label
        var selector = "[title="+"\'"+label+"\'"+"]";
        var nodes = document.querySelectorAll(selector);
        // Set their parent TR opacity to 0.5;
        
        console.log("node");
        for (var i = 0; i < nodes.length; ++i) {
            
          var item = nodes[i];  // Calling myNodeList.item(i) isn't necessary in JavaScript
          item.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.style.opacity = '0.4'; // Obviously super fragile... basically looking for the ancestor <tr>
        }
    }
};

// Run our script as soon as the document's DOM is ready.
// document.addEventListener('DOMContentLoaded', function () {
    
    setTimeout(function() {
        console.log("script loaded!");
        husher.hush();}, 5000);
// });
